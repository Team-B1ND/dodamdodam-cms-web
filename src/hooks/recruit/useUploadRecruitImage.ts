import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import {
  ModifyRecrutAtom,
  imgUrlAtom,
  recruitPdfAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Params, useParams } from "react-router-dom";
import { PostRecruitParam } from "../../repositories/RecruitRepository/RecruitRepository";

const useUploadRecruitImage = () => {
  const [recruitPdfdata, setRecruitPdfData] = useRecoilState(recruitPdfAtom);
  const postUploadMutation = usePostUploadMutation();
  const [, setImgUrl] = useRecoilState(imgUrlAtom);
  const { id }: Readonly<Params<"id">> = useParams();

  const [, setModifyRecruitData] =
    useRecoilState<PostRecruitParam>(ModifyRecrutAtom);

  const onChangePdf = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files!!;

      for (const file of Array.from(fileList)) {
        const formData = new FormData();
        formData.append("file", file);

        try {
          const { data } = await postUploadMutation.mutateAsync({ formData });

          setRecruitPdfData((prevPdfData) => [
            ...prevPdfData,
            { name: file.name, url: data },
          ]);
        } catch (error) {
          B1ndToast.showError("파일 업로드에 실패했습니다.");
        }
      }
    },
    [postUploadMutation, setRecruitPdfData]
  );

  const UploadThumbnail = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any) => {
      let image: File;

      image = e.target.files[0];

      const formData = new FormData();
      formData.append("file", image);

      postUploadMutation.mutate(
        { formData },
        {
          onSuccess: (data) => {
            if (id) {
              setModifyRecruitData((prev) => ({
                ...prev,
                image: data.data,
              }));
              setImgUrl(data.data);
            } else {
              setImgUrl(data.data);
            }
          },
          onError: () => {
            setImgUrl("");
          },
        }
      );
    },
    [postUploadMutation, setImgUrl]
  );
  const handleDeletePdf = (id: number) => {
    const newPdfUrlList = recruitPdfdata.filter((_, index) => index !== id);
    setRecruitPdfData(newPdfUrlList);
  };

  return {
    onChangePdf,
    UploadThumbnail,
    handleDeletePdf,
  };
};

export default useUploadRecruitImage;
