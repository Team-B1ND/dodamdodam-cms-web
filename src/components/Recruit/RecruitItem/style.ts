import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  width: 430px;
  height: 270px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  box-shadow: ${palette.boxShadow};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const RecruitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RecruitDescriptionContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  bottom: -100px;
  transition: all 0.3s ease;
  left: 0px;
  position: absolute;
  background-color: black;
  opacity: 30%;

  ${Container}:hover & {
    bottom: 0px;
  }
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;
