import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { WriteEditorContainer } from "./style";
import { RefObject } from "react";
import { NoticeWrite } from "../../../types/interfaces/notice/notice.type";
import React from "react";

interface Props {
  editorRef: RefObject<Editor>;
  writeData: NoticeWrite;
  onChangeContent: () => void;
}

const WriteEditor = ({ editorRef, writeData, onChangeContent }: Props) => {
  return (
    <WriteEditorContainer>
      <Editor
        initialValue={writeData.content}
        ref={editorRef}
        height="573px"
        previewStyle="vertical"
        initialEditType="markdown"
        onChange={onChangeContent}
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

export default React.memo(WriteEditor);
