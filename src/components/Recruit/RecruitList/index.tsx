import { useGetRecruitsQuery } from "../../../queries/recruit/recruit.query";
import RecruitItem from "../RecruitItem";

const RecruitList = () => {
  const { data } = useGetRecruitsQuery({ suspense: true });

  return (
    <>
      {data?.data.map((recruit) => (
        <RecruitItem {...recruit} />
      ))}
    </>
  );
};

export default RecruitList;
