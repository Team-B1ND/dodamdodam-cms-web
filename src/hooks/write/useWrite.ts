import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

const useWrite = () => {
  const editorRef = useRef<Editor>(null);
  const [content, setContent] = useState("");

  const onChangeWrite = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getInstance().getMarkdown());
    }
  };

  const onSubmitWrite = () => {
    console.log(content);
  };

  return { editorRef, onChangeWrite, onSubmitWrite };
};

export default useWrite;
