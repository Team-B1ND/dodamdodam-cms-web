import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { WriteEditorContainer } from "./style";
import useWrite from "../../../hooks/write/useWrite";

const WriteEditor = () => {
  const { editorRef, content, onChangeWrite, onSubmitWrite } = useWrite();

  return (
    <WriteEditorContainer>
      <Editor
        initialValue={content}
        ref={editorRef}
        height="658px"
        previewStyle="vertical"
        initialEditType="markdown"
        onChange={onChangeWrite}
        hooks={{
          addImageBlobHook: (blob, callback) => {
            callback(
              "https://velog.velcdn.com/images/dev_boku/post/69ccbdfd-40fe-4ffd-a26e-fdf6154464c2/image.png",
              "alt text"
            );
            return false;
          },
        }}
      />
    </WriteEditorContainer>
  );
};

export default WriteEditor;
