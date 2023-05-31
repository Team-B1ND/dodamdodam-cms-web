import useWrite from "../../hooks/write/useWrite";
import SubmitButton from "../common/SubmitButton";
import {
  WriteContainer,
  WriteHeaderContainer,
  WriteHeaderTitleInput,
} from "./style";
import WriteEditor from "./WriteEditor";

const Write = () => {
  const {
    editorRef,
    writeData,
    onChangeTitle,
    onChangeContent,
    onSubmitWrite,
  } = useWrite();

  return (
    <WriteContainer>
      <WriteHeaderContainer>
        <WriteHeaderTitleInput
          placeholder="제목을 입력해주세요"
          onChange={onChangeTitle}
        />
        <SubmitButton onClick={onSubmitWrite}>게시</SubmitButton>
      </WriteHeaderContainer>
      <WriteEditor
        editorRef={editorRef}
        writeData={writeData}
        onChangeContent={onChangeContent}
      />
    </WriteContainer>
  );
};

export default Write;
