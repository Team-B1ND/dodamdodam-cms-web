import HomeActiveNoticeList from "./HomeActiveNoticeList";
import HomeNoticeList from "./HomeNoticeList";
import HomePostingButton from "./HomePostingButton";
import {
  HomeContainer,
  HomeLeftWrap,
  HomeRightWrap,
  HomeWrap,
  HomeWrapTitle,
} from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrap>
        <HomeLeftWrap>
          <HomePostingButton />
          <HomeWrapTitle>현재 사용중인 공지사항</HomeWrapTitle>
          <HomeActiveNoticeList />
        </HomeLeftWrap>
        <HomeRightWrap>
          <HomeWrapTitle>대기중인 공지사항</HomeWrapTitle>
          <HomeNoticeList />
        </HomeRightWrap>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
