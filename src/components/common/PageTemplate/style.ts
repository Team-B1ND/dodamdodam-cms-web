import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor3};
`;

export const PageTemplateWrap = styled.div`
  width: 1205px;
  height: 100%;
  margin-left: auto;
  padding: 40px;
  padding-top: 70px;
  box-sizing: border-box;
`;
