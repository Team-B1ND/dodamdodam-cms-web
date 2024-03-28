import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import {
  imgUrlAtom,
  recruitPdfAtom,
} from "../../store/recruitWrite/recuritWriteAtom";
import { B1ndToast } from "@b1nd/b1nd-toastify";

const useUploadRecruitImage = () => {
  const [recruitPdfdata, setRecruitPdfData] = useRecoilState(recruitPdfAtom);
  const postUploadMutation = usePostUploadMutation();
  const [pdfImgUrl, setPdfImgUrl] = useRecoilState(imgUrlAtom);

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

  const UploadThumbnail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files!!;
    const formData = new FormData();
    let imageUrlList = [...pdfImgUrl];

    formData.append("file", fileList[0]);

    try {
      const { data } = await postUploadMutation.mutateAsync({ formData });

      const ImageUrls = URL.createObjectURL(fileList[0]);
      imageUrlList.push(ImageUrls);

      setPdfImgUrl(data);
    } catch (error) {
      B1ndToast.showError("파일 업로드에 실패했습니다.");
    }
  };

  const handleDeletePdf = (id: number) => {
    const newPdfUrlList = recruitPdfdata.filter((_, index) => index !== id);
    setRecruitPdfData(newPdfUrlList);
  };

  return {
    onChangePdf,
    pdfImgUrl,
    UploadThumbnail,
    handleDeletePdf,
  };
};

export default useUploadRecruitImage;
