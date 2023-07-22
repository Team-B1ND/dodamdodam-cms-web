import * as S from "./style";
import { FiUpload } from "@react-icons/all-files/fi/FiUpload";
import RecruitPdfUploadItem from "../RecuritPdfUploadItem";
import useUploadRecruitPdf from "../../../hooks/recruit/useUploadPdf";

interface Props {
  id: string;
}

const RecruitUploadPdf = ({ id }: Props) => {
  const { selectedPdfFiles, onPushPdf, onDeletePdf } = useUploadRecruitPdf(
    Number(id)
  );

  return (
    <S.Container>
      {selectedPdfFiles.map((pdf) => (
        <RecruitPdfUploadItem
          file={pdf}
          recruitDeleteFunc={() => onDeletePdf(pdf.name)}
          key={pdf.name}
        />
      ))}
      <input
        type="file"
        id="recruitPdfUploadInput"
        multiple
        onChange={onPushPdf}
      />
      <S.UploadButton htmlFor="recruitPdfUploadInput">
        <S.UploadButtonIcon>
          <FiUpload />
        </S.UploadButtonIcon>
        <S.UploadButtonText>pdf 업로드</S.UploadButtonText>
      </S.UploadButton>
    </S.Container>
  );
};

export default RecruitUploadPdf;
