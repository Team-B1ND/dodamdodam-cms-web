import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

const useWrite = () => {
  const editorRef = useRef<Editor>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.getInstance().setMarkdown("");
    }
  }, []);

  const onChangeWrite = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getMarkdown());
    }
  };

  const onSubmitWrite = () => {
    console.log(content);
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return { editorRef, content, onChangeWrite, onSubmitWrite };
};

export default useWrite;
