import {
  HomePostingButtonContainer,
  HomePostingButtonIcon,
  HomePostingButtonText,
} from "./style";
import { BsFillPlusCircleFill } from "@react-icons/all-files/bs/BsFillPlusCircleFill";

const HomePostingButton = () => {
  return (
    <HomePostingButtonContainer>
      <HomePostingButtonIcon>
        <BsFillPlusCircleFill />
      </HomePostingButtonIcon>
      <HomePostingButtonText>글쓰기</HomePostingButtonText>
    </HomePostingButtonContainer>
  );
};

export default HomePostingButton;
