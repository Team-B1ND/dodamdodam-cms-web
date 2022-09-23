import {
  NavContainer,
  NavLogoImg,
  NavLogoWrap,
  NavMenuIcon,
  NavMenuItemWrap,
} from "./style";
import DodamTextLogo from "../../../assets/logo/dodamTextLogo.svg";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
import { useRecoilState } from "recoil";
import { navFoldAtom } from "../../../store/common/commonAtom";

const Nav = () => {
  const [isFold, setIsFold] = useRecoilState(navFoldAtom);

  return (
    <NavContainer isFold={isFold}>
      <NavLogoWrap>
        <NavLogoImg src={DodamTextLogo} isFold={isFold} />
        <NavMenuIcon onClick={() => setIsFold((prev) => !prev)}>
          {isFold ? <HiMenu /> : <IoCloseSharp />}
        </NavMenuIcon>
      </NavLogoWrap>
      <NavMenuItemWrap></NavMenuItemWrap>
    </NavContainer>
  );
};

export default Nav;
