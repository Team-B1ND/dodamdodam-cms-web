import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  row-gap: 25px;
`;

export const HomeLeftWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  row-gap: 25px;
  flex-direction: column;
  padding: 0px 12px;
`;

export const HomeRightWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  row-gap: 25px;
  flex-direction: column;
  padding: 0px 12px;
`;

export const HomeWrapTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;
