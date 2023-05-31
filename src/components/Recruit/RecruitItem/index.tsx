import { Recruit } from "../../../types/recruit/recruit.type";
import * as S from "./style";

interface Props extends Recruit {}

const RecruitItem = ({ companyName, image }: Props) => {
  return (
    <S.Container>
      <S.RecruitImage src={image} />
      <S.RecruitDescriptionContainer>
        <S.CompanyName>{companyName}</S.CompanyName>
      </S.RecruitDescriptionContainer>
    </S.Container>
  );
};

export default RecruitItem;
