import { ChangeEvent, useCallback, useState, DragEvent } from "react";
import { useRecoilState } from "recoil";
import { usePostUploadMutation } from "../../queries/upload/upload.query";
import { recruitImageAtom } from "../../store/recruitWrite/recuritWriteAtom";

const useUploadRecruitImage = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [, setRecruitImage] = useRecoilState(recruitImageAtom);
  const postUploadMutation = usePostUploadMutation();

  const onChangeImage = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any) => {
      let image: File;
      if (e.type === "drop") {
        image = e.dataTransfer.files[0];
      } else {
        image = e.target.files[0];
      }
      const formData = new FormData();
      formData.append("file", image);

      postUploadMutation.mutate(
        { formData },
        {
          onSuccess: (data) => {
            setRecruitImage(data.data);
          },
          onError: () => {
            setRecruitImage("");
          },
        }
      );
    },
    [postUploadMutation, setRecruitImage]
  );

  const dropHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDrag(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChangeImage(e);
        e.dataTransfer.clearData();
      }
    },
    [onChangeImage]
  );

  const dragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDrag(true);
    }
  }, []);

  const dragInHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const dragOutHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDrag(false);
  }, []);

  return {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    isDrag,
  };
};

export default useUploadRecruitImage;
