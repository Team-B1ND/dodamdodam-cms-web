import React, { useCallback, useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { NoticeWrite } from "../../types/interfaces/notice/notice.type";

const useWrite = () => {
  const editorRef = useRef<Editor>(null);
  const [writeData, setWriteData] = useState<NoticeWrite>({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.getInstance().setMarkdown("");
    }
  }, []);

  const onChangeContent = useCallback(() => {
    if (editorRef.current) {
      setWriteData((prev) => ({
        ...prev,
        content: editorRef.current!.getInstance().getMarkdown(),
      }));
    }
  }, [editorRef, setWriteData]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWriteData((prev) => ({ ...prev, title: value }));
  };

  const onSubmitWrite = useCallback(() => {
    console.log(writeData.content);
  }, [writeData]);

  return {
    editorRef,
    writeData,
    onChangeTitle,
    onChangeContent,
    onSubmitWrite,
  };
};

export default useWrite;
