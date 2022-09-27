import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;
<<<<<<< Updated upstream
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
=======
  box-shadow: ${palette.boxShadow};
>>>>>>> Stashed changes
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
