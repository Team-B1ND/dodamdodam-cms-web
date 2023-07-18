import dayjs from "dayjs";
import * as S from "./style";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

interface Props {
  file: File;
  recruitDeleteFunc: VoidFunction;
}

const RecruitPdfUploadItem = ({ file, recruitDeleteFunc }: Props) => {
  return (
    <S.Container>
      <S.FileName>{file.name}</S.FileName>
      <S.ModifyDate>
        {dayjs(new Date(file.lastModified)).format("YYYY.MM.DD")}
      </S.ModifyDate>
      <S.DeleteButton onClick={recruitDeleteFunc}>
        <IoClose />
      </S.DeleteButton>
    </S.Container>
  );
};

export default RecruitPdfUploadItem;
