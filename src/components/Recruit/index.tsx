import { Suspense } from "react";
import RecruitList from "./RecruitList";
import * as S from "./style";

const Recruit = () => {
  return (
    <S.Container>
      <Suspense fallback={<>로딩중...</>}>
        <RecruitList />
      </Suspense>
    </S.Container>
  );
};

export default Recruit;
