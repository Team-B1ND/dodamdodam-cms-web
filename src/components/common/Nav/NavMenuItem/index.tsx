import {
  NavMenuItemContainer,
  NavMenuItemIcon,
  NavMenuItemText,
} from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  navCurrentTabAtom,
  navFoldAtom,
} from "../../../../store/common/commonAtom";
import { useEffect, useMemo } from "react";

interface Props {
  title: string;
  icon: JSX.Element;
  link: string;
  color: string;
}

const NavMenuItem = ({ title, icon, link, color }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const isFold = useRecoilValue(navFoldAtom);
  const [tab, setTab] = useRecoilState(navCurrentTabAtom);

  useEffect(() => {
    setTab(`/${location.pathname.split("/")[1]}`);
  }, [location, setTab]);

  const isSelect = useMemo(() => {
    return link === tab;
  }, [tab, link]);

  return (
    <NavMenuItemContainer
      isSelect={isSelect}
      color={color}
      onClick={() => {
        setTab(link);
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
