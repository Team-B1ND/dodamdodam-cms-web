import useNoticeList from "../../../hooks/home/useNoticeList";
import HomeNoticeItem from "../HomeNoticeItem";
import { HomeNoticeListContainer } from "./style";

const HomeNoticeList = () => {
  const { pendingNotices } = useNoticeList();

  return (
    <HomeNoticeListContainer>
      {pendingNotices.map((item) => (
        <HomeNoticeItem data={item} />
      ))}
    </HomeNoticeListContainer>
  );
};

export default HomeNoticeList;
