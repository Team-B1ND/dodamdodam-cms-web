import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor3};
  display: flex;
  position: relative;
`;

export const RightWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
