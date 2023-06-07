import { useState } from "react";
import { useMemo } from "react";
import { useGetRecruitsQuery } from "../../../queries/recruit/recruit.query";
import NormalButton from "../../common/NormalButton";
import SubmitButton from "../../common/SubmitButton";
import RecruitItem from "../RecruitItem";
import * as S from "./style";

const RecruitList = () => {
  const { data } = useGetRecruitsQuery({ suspense: true });

  const createYears = useMemo(() => {
    return new Set(data?.data.map((item) => item.createdDate.slice(0, 4)));
  }, [data]);

  const [selectedYear, setSelectedYear] = useState([...createYears][0]);

  return (
    <>
      <S.YearWrap>
        {[...createYears].map((item) =>
          item === selectedYear ? (
            <SubmitButton>{item}</SubmitButton>
          ) : (
            <NormalButton onClick={() => setSelectedYear(item)}>
              {item}
            </NormalButton>
          )
        )}
      </S.YearWrap>
      <S.Container>
        {data?.data
          .filter((recruit) => recruit.createdDate.slice(0, 4) === selectedYear)
          .map((item) => (
            <RecruitItem {...item}>{item}</RecruitItem>
          ))}
      </S.Container>
    </>
  );
};

export default RecruitList;
