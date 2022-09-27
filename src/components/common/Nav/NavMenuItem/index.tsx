import {
  NavMenuItemContainer,
  NavMenuItemIcon,
  NavMenuItemText,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  navCurrentTabAtom,
  navFoldAtom,
} from "../../../../store/common/commonAtom";

interface Props {
  title: string;
  icon: JSX.Element;
  link: string;
  color: string;
}

const NavMenuItem = ({ title, icon, link, color }: Props) => {
  const navigate = useNavigate();
<<<<<<< Updated upstream
=======
  const location = useLocation();
>>>>>>> Stashed changes

  const isFold = useRecoilValue(navFoldAtom);
  const [tab, setTab] = useRecoilState(navCurrentTabAtom);
  const isSelect = title === tab;

  return (
    <NavMenuItemContainer
      isSelect={isSelect}
      color={color}
      onClick={() => {
        setTab(title);
        navigate(link);
      }}
      isFold={isFold}
    >
      <NavMenuItemIcon isSelect={isSelect} color={color}>
        {icon}
      </NavMenuItemIcon>
      <NavMenuItemText isSelect={isSelect} isFold={isFold}>
        {title}
      </NavMenuItemText>
    </NavMenuItemContainer>
  );
};

export default NavMenuItem;
