import useNoticeList from "../../../hooks/home/useNoticeList";
import HomeNoticeItem from "../HomeNoticeItem";
import { HomeActiveNoticeListContainer } from "./style";

const HomeActiveNoticeList = () => {
  const { activeNotices } = useNoticeList();

  return (
    <HomeActiveNoticeListContainer>
      {activeNotices.map((item) => (
        <HomeNoticeItem data={item} />
      ))}
    </HomeActiveNoticeListContainer>
  );
};

export default HomeActiveNoticeList;
