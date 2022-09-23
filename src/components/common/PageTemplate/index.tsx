import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton";
import Header from "../Header";
import Nav from "../Nav";
import {
  PageTemplateContainer,
  PageTemplateLeftWrap,
  PageTemplateWrap,
} from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <Nav />
      <PageTemplateLeftWrap>
        <Header />
        <PageTemplateWrap>{children}</PageTemplateWrap>
      </PageTemplateLeftWrap>
      <DarkmodeButton />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
