import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import {
  ModifyRecrutAtom,
  imgUrlAtom,
  recruitPdfAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import { Params, useParams } from "react-router-dom";
import { PostRecruitParam } from "../../repositories/RecruitRepository/RecruitRepository";

const useUploadRecruitImage = () => {
  const [recruitPdfdata, setRecruitPdfData] = useRecoilState(recruitPdfAtom);
  const postUploadMutation = usePostUploadMutation();
  const [, setImgUrl] = useRecoilState(imgUrlAtom);
  const { id }: Readonly<Params<"id">> = useParams();

  const [modifyRecruitData, setModifyRecruitData] =
    useRecoilState<PostRecruitParam>(ModifyRecrutAtom);

  const onChangePdf = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files!!;

      for (const file of Array.from(fileList)) {
        const formData = new FormData();
        formData.append("file", file);

        postUploadMutation.mutate(
          { formData },
          {
            onSuccess: (data) => {
              if (id) {
                setRecruitPdfData((prev) => [
                  ...prev,
                  { name: file.name, url: data.data },
                ]);

                setModifyRecruitData((prev) => ({
                  ...prev,
                  pdfs: [...prev.pdfs, { name: file.name, url: data.data }],
                }));
              } else {
              }
            },
            onError: () => {
              setImgUrl("");
            },
          }
        );
      }
    },
    [postUploadMutation, setRecruitPdfData, setModifyRecruitData]
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
    const PdfList = modifyRecruitData.pdfs.filter((_, index) => index !== id);
    setModifyRecruitData((prev) => ({
      ...prev,
      pdfs: PdfList,
    }));
  };

  return {
    onChangePdf,
    UploadThumbnail,
    handleDeletePdf,
  };
};

export default useUploadRecruitImage;
