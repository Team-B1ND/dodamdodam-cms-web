import {
  HomePostingButtonContainer,
  HomePostingButtonIcon,
  HomePostingButtonText,
} from "./style";
import { BsFillPlusCircleFill } from "@react-icons/all-files/bs/BsFillPlusCircleFill";
import { useNavigate } from "react-router-dom";

const HomePostingButton = () => {
  const navigate = useNavigate();

  return (
    <HomePostingButtonContainer onClick={() => navigate("/write")}>
      <HomePostingButtonIcon>
        <BsFillPlusCircleFill />
      </HomePostingButtonIcon>
      <HomePostingButtonText>글쓰기</HomePostingButtonText>
    </HomePostingButtonContainer>
  );
};

export default HomePostingButton;
