import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: absolute;
  top: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
