import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface Props {
  id: number;
  writer: string;
  name: string;
  etc: string;
  image: string;
}

const RecruitItem = ({ id, image, name, writer }: Props) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/recruit/${id}`)}>
      <S.RecruitImage src={image} />
      <S.RecruitDescriptionContainer>
        <S.CompanyName>{name}</S.CompanyName>
        <S.WriterName>{writer}</S.WriterName>
      </S.RecruitDescriptionContainer>
    </S.Container>
  );
};

export default RecruitItem;
