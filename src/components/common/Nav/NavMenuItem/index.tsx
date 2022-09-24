import {
  NavMenuItemContainer,
  NavMenuItemIcon,
  NavMenuItemText,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navFoldAtom } from "../../../../store/common/commonAtom";

interface Props {
  isSelect: boolean;
  title: string;
  icon: JSX.Element;
  link: string;
  color: string;
}

const NavMenuItem = ({ isSelect, title, icon, link, color }: Props) => {
  const navigate = useNavigate();

  const [isFold, setIsFold] = useRecoilState(navFoldAtom);

  return (
    <NavMenuItemContainer
      isSelect={isSelect}
      color={color}
      onClick={() => navigate(link)}
      isFold={isFold}
    >
      <NavMenuItemIcon color={color}>{icon}</NavMenuItemIcon>
      <NavMenuItemText isFold={isFold}>{title}</NavMenuItemText>
    </NavMenuItemContainer>
  );
};

export default NavMenuItem;
