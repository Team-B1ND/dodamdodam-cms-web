import { ChangeEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import { recruitPdfFileNameAtom } from "../../store/recruitWrite/recuritWriteAtom";

const useUploadRecruitPdf = () => {
  const [recuritPdfFileNames, setRecruitPdfFileNames] = useRecoilState(
    recruitPdfFileNameAtom
  );

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
              setRecruitPdfFileNames((prev) => [...prev, data.data]);
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
      prev.filter((item) => item !== selectFile?.processedFileName)
    );

    setTempRecruitPdfFileNames((prev) =>
      prev.filter((tempItem) => tempItem.fileName !== fileName)
    );
  };

  return { selectedPdfFiles: selectedRecruitPdfFiles, onPushPdf, onDeletePdf };
};

export default useUploadRecruitPdf;
