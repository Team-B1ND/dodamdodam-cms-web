import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  overflow-x: scroll;
`;

export const UploadButton = styled.label`
  width: 15%;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadButtonIcon = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 100%;
  background-color: #e1e2e4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 20px;
`;

export const UploadButtonText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
`;

export const PdfItemContainer = styled.div`
  min-width: 15%;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
`;
