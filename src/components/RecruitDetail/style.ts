import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const TopWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyName = styled.h3`
  font-size: 33px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const RecruitImage = styled.img`
  width: 100%;
`;

export const RecruitFileNameBox = styled.p`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border: 1px solid ${({ theme }) => theme.borderColor};
  ${ellipsisLine(1)};
  box-sizing: border-box;
`;

export const EtcContent = styled.pre`
  font-size: 22px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 25px;
  color: ${({ theme }) => theme.contrast};
  white-space: pre-wrap;
`;
