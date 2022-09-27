import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;
  box-shadow: ${palette.boxShadow};
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
