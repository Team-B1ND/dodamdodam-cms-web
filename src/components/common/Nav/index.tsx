import {
  NavContainer,
  NavLogoImg,
  NavLogoWrap,
  NavMenuIcon,
  NavMenuItemWrap,
} from "./style";
import DodamTextLogo from "../../../assets/logo/dodamTextLogo.png";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";
import { useRecoilState } from "recoil";
import { navFoldAtom } from "../../../store/common/commonAtom";
import NavItem from "./NavMenuItem";
import { NAV_ITEMS } from "./constant";

const Nav = () => {
  const [isFold, setIsFold] = useRecoilState(navFoldAtom);

  return (
    <NavContainer isFold={isFold}>
      <NavLogoWrap isFold={isFold}>
        <NavLogoImg src={DodamTextLogo} isFold={isFold} />
        <NavMenuIcon isFold={isFold} onClick={() => setIsFold((prev) => !prev)}>
          {isFold ? <HiMenu /> : <IoCloseSharp />}
        </NavMenuIcon>
      </NavLogoWrap>
      <NavMenuItemWrap>
        {NAV_ITEMS.map((item) => (
          <NavItem {...item} icon={<item.icon />} key={item.title} />
        ))}
      </NavMenuItemWrap>
    </NavContainer>
  );
};

export default Nav;
