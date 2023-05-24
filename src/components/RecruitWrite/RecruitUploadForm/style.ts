import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  input[type="file"] {
    display: none;
  }
`;

export const UploadContainer = styled.label`
  width: 800px;
  height: 1000px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

export const UploadButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.contrast};
  font-size: 60px;
  background: none;
  border: 0px;
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
