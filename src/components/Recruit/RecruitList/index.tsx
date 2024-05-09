import { useGetRecruitsQuery } from "../../../queries/recruit/recruit.query";
import SubmitButton from "../../common/SubmitButton";
import RecruitItem from "../RecruitItem";
import * as S from "./style";

const RecruitList = () => {
  const { data: getRecruitList } = useGetRecruitsQuery(1, 10, {
    suspense: true,
  });

  return (
    <>
      <S.YearWrap>
        <SubmitButton>2024</SubmitButton>
      </S.YearWrap>
      <S.Container>
        {getRecruitList?.data.recruitList.map((key) => (
          <RecruitItem {...key}>{key}</RecruitItem>
        ))}
      </S.Container>
      <S.PageContainer>
        <S.PageButton
          disabled={
            getRecruitList && getRecruitList?.data.recruitList.length <= 10
          }
        >
          더보기
        </S.PageButton>
      </S.PageContainer>
    </>
  );
};

export default RecruitList;
