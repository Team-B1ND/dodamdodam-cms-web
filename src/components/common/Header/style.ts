import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
