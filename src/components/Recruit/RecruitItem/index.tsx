import { useNavigate } from "react-router-dom";
import { Recruit } from "../../../types/recruit/recruit.type";
import * as S from "./style";

interface Props extends Recruit {}

const RecruitItem = ({ id, companyName, image, writer }: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/recruit/${id}`)}>
      <S.RecruitImage src={image} />
      <S.RecruitDescriptionContainer>
        <S.CompanyName>{companyName}</S.CompanyName>
        <S.WriterName>{writer.name}</S.WriterName>
      </S.RecruitDescriptionContainer>
    </S.Container>
  );
};

export default RecruitItem;
