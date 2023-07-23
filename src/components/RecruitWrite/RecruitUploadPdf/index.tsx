import * as S from "./style";
import { FiUpload } from "@react-icons/all-files/fi/FiUpload";
import RecruitPdfUploadItem from "../RecuritPdfUploadItem";
import useUploadRecruitPdf from "../../../hooks/recruit/useUploadPdf";
import { GetRecruitFileNamesResponse } from "../../../repositories/RecruitRepository/RecruitRepository";

interface Props {
  id: string;
  pdfFile: GetRecruitFileNamesResponse;
}

const RecruitUploadPdf = ({ id, pdfFile }: Props) => {
  const { selectedPdfFiles, onPushPdf, onDeletePdf } = useUploadRecruitPdf({
    id: Number(id),
    pdfFile,
  });

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
        accept="application/pdf"
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
