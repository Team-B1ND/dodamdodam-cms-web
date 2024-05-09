import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  width: 348px;
  height: 220px;
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

  object-fit: contain;
`;

export const RecruitDescriptionContainer = styled.div`
  width: 100%;
  height: 90px;

  display: flex;

  padding: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: black;
  opacity: 60%;
  justify-content: space-between;
`;

export const CompanyName = styled.h3`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const WriterName = styled.p`
  color: white;
  font-size: 16.5px;
  margin-top: auto;
`;
