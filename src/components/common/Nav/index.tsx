import {
  NavContainer,
  NavLogoImg,
  NavLogoWrap,
  NavMenuItemWrap,
} from "./style";
import DodamTextLogo from "../../../assets/logo/dodamTextLogo.png";

import { useRecoilState } from "recoil";
import { navFoldAtom } from "../../../store/common/commonAtom";
import NavItem from "./NavMenuItem";
import { NAV_ITEMS } from "./constant";

const Nav = () => {
  const [isFold] = useRecoilState(navFoldAtom);

  return (
    <NavContainer isFold={isFold}>
      <NavLogoWrap isFold={isFold}>
        <NavLogoImg
          src={DodamTextLogo}
          isFold={isFold}
          onClick={() =>
            (window.location.href =
              "https://dodam.b1nd.com/teacher/offbase-pass")
          }
        />
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
