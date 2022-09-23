import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor3};
  display: flex;
  position: relative;
`;

export const PageTemplateWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
`;

export const PageTemplateLeftWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
