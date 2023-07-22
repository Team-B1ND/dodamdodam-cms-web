import { ChangeEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import { recruitPdfFileAtom } from "../../store/recruitWrite/recuritWriteAtom";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useGetRecruitFileNamesQuery } from "../../queries/recruit/recruit.query";

const useUploadRecruitPdf = (id: number) => {
  const [recuritPdfFileNames, setRecruitPdfFileNames] =
    useRecoilState(recruitPdfFileAtom);

  const { data: pdfFile } = useGetRecruitFileNamesQuery({ id });

  const [tempRecruitPdfFileNames, setTempRecruitPdfFileNames] = useState<
    {
      fileName: string;
      processedFileName: string;
    }[]
  >([]);

  const [selectedRecruitPdfFiles, setSelectedRecruitPdfFiles] = useState<
    File[]
  >([]);

  const postUploadMutation = usePostUploadMutation();

  const uploadFiles = useCallback(
    async (changedFiles: File[]) => {
      for (let file of changedFiles) {
        const formData = new FormData();
        formData.append("file", file);
        await postUploadMutation.mutateAsync(
          { formData },
          {
            onSuccess: (data) => {
              setRecruitPdfFileNames((prev) => [
                ...prev,
                { url: data.data, name: file.name },
              ]);
              setTempRecruitPdfFileNames((prev) => [
                ...prev,
                { fileName: file.name, processedFileName: data.data },
              ]);
            },
          }
        );
      }
    },
    [postUploadMutation, setRecruitPdfFileNames]
  );

  const onPushPdf = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let changedFiles: File[] = [];

      if (e.target.files && e.target.files.length) {
        let files: File[] = [];
        for (let file of e.target.files) {
          files.push(file);
        }

        if (id) {
          const duplicatesExist = files.some((fileItem) =>
            pdfFile?.data.some((item) => item.pdfName === fileItem.name)
          );

          if (duplicatesExist) {
            B1ndToast.showInfo("중복된 pdf입니다.");
            return;
          }
        }

        if (recuritPdfFileNames.length === 0) {
          setSelectedRecruitPdfFiles(files);
          files.map((item) => changedFiles.push(item));
        } else {
          files.map((item) => {
            if (
              selectedRecruitPdfFiles.findIndex(
                (callbackItem) => callbackItem.name === item.name
              ) === -1
            ) {
              changedFiles.push(item);
            }

            return item;
          });

          setSelectedRecruitPdfFiles([
            ...selectedRecruitPdfFiles,
            ...changedFiles,
          ]);
        }
      }
      uploadFiles(changedFiles);
    },
    [recuritPdfFileNames.length, selectedRecruitPdfFiles, uploadFiles]
  );

  const onDeletePdf = (fileName: string) => {
    setSelectedRecruitPdfFiles((prev) =>
      prev.filter((item) => item.name !== fileName)
    );

    const selectFile = tempRecruitPdfFileNames.find(
      (item) => item.fileName === fileName
    );

    setRecruitPdfFileNames((prev) =>
      prev.filter((item) => item.url !== selectFile?.processedFileName)
    );

    setTempRecruitPdfFileNames((prev) =>
      prev.filter((tempItem) => tempItem.fileName !== fileName)
    );
  };

  return { selectedPdfFiles: selectedRecruitPdfFiles, onPushPdf, onDeletePdf };
};

export default useUploadRecruitPdf;
