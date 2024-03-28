import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton";
import Header from "../Header";
import Nav from "../Nav";
import * as S from "./style";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <Nav />
      <S.RightWrap>
        <Header />
        <S.ContentWrap>{children}</S.ContentWrap>
      </S.RightWrap>
      {/* <DarkmodeButton /> */}
    </S.Container>
  );
};

export default Layout;
