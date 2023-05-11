import { HomePostingButtonIcon, HomePostingButtonText } from "./style";
import { BsFillPlusCircleFill } from "@react-icons/all-files/bs/BsFillPlusCircleFill";
import { useNavigate } from "react-router-dom";
import NormalButton from "../../common/NormalButton";

const HomePostingButton = () => {
  const navigate = useNavigate();

  return (
    <NormalButton onClick={() => navigate("/write")}>
      <HomePostingButtonIcon>
        <BsFillPlusCircleFill />
      </HomePostingButtonIcon>
      <HomePostingButtonText>글쓰기</HomePostingButtonText>
    </NormalButton>
  );
};

export default HomePostingButton;
