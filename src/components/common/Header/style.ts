import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 70px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;
