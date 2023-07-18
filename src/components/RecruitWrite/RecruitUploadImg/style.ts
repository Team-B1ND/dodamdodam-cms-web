import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  width: 40%;
  aspect-ratio: 3/4;
  position: relative;
`;

export const UploadBox = styled.label`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

export const UploadButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 30px;
  background: none;
  border: 0px;
  background-color: #e1e2e4;
  border-radius: 100%;
`;

export const UploadGuide = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
  text-align: center;
  line-height: 20px;

  strong {
    color: ${palette.main};
    text-decoration: underline;
  }
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ImageDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${[palette.red[400]]};
  position: absolute;
  right: 20px;
  top: 20px;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  padding: 0px;
`;
