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
  transition: all 0.3s ease;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: black;
  opacity: 50%;
  justify-content: space-between;
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export const WriterName = styled.p`
  color: white;
  font-size: 18px;
  margin-top: auto;
`;
