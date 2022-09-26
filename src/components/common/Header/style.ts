import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
