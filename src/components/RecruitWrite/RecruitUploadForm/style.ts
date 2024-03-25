import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 85%;

  column-gap: 50px;
`;

export const Title = styled.p<{ isBottom: number }>`
  font-size: 18px;
  color: #404040;
  font-weight: 700;

  margin-bottom: ${(props) => props.isBottom}px;
  padding-left: 4px;
`;

export const PreviewBox = styled.p`
  width: 582px;
  height: 777px;

  background-color: #eae9e9;

  border-radius: 10px;
`;

export const Input = styled.textarea`
  width: 500px;
  height: 160px;

  border-radius: 10px;

  border: 1px solid #d9d9d9;

  background-color: #fafafc;
`;

export const RecruitUpload = styled.button`
  width: 500px;
  height: 48px;

  border: 10px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;
  color: white;

  background-color: #5d8bff;

  margin-top: 30px;
`;

export const PreviewContainer = styled.div``;
export const UploadContainer = styled.div`
  margin-top: -12px;
`;

export const InputContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const FileUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 45px;

  border-radius: 10px;
  border: 1px solid #d9d9d9;

  background-color: #f2f2f2;

  font-size: 14px;
`;

export const JobContainer = styled.div`
  padding-left: 4px;

  margin-top: 40px;
`;

export const JobTitle = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 700;
  color: #969595;

  border-bottom: 1px solid #a1a1a1;

  height: 30px;
  width: 504px;
`;

export const JobListBox = styled.div`
  display: flex;

  gap: 10px;
  flex-wrap: wrap;

  /* width: 504px; */

  user-select: none;
`;

export const JobList = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;

  color: black;
  font-family: Pretendard-SemiBold, Apple SD Gothic Neo, Malgun Gothic;

  padding: 14px 14px 14px 14px;

  cursor: pointer;
`;

export const JobBox = styled.div`
  display: flex;

  width: 504px;
`;

// export const UploadContainer = styled.div`
//   width: 40%;
//   aspect-ratio: 3/4;
//   position: relative;
// `;

// export const UploadBox = styled.label`
//   width: 100%;
//   height: 100%;
//   border: 1px solid ${({ theme }) => theme.borderColor};
//   background-color: ${({ theme }) => theme.backgroundColor4};
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   row-gap: 10px;
// `;

// export const UploadButton = styled.div`
//   width: 60px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${({ theme }) => theme.contrast};
//   font-size: 60px;
//   background: none;
//   border: 0px;
// `;

// export const UploadGuide = styled.p`
//   font-size: 16px;
//   color: ${({ theme }) => theme.contrast};
//   text-align: center;
//   line-height: 20px;

//   strong {
//     color: ${palette.main};
//     text-decoration: underline;
//   }
// `;

// export const UploadedImage = styled.img`
//   width: 100%;
//   height: 100%;
//   border: 1px solid ${({ theme }) => theme.borderColor};
// `;

// export const ImageDeleteButton = styled.button`
//   width: 30px;
//   height: 30px;
//   border-radius: 5px;
//   background-color: ${[palette.red[400]]};
//   position: absolute;
//   right: 20px;
//   top: 20px;
//   border: 0px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 24px;
//   color: white;
//   padding: 0px;
// `;

// export const CompanyNameInput = styled.input`
//   width: 100%;
//   height: 60px;
//   border: 1px solid ${({ theme }) => theme.borderColor};
//   padding: 14px;
//   box-sizing: border-box;
//   font-size: 18px;
// `;

// export const EtcTextarea = styled.textarea`
//   width: 100%;
//   height: 400px;
//   border: 1px solid ${({ theme }) => theme.borderColor};
//   resize: none;
//   padding: 14px;
//   box-sizing: border-box;
//   font-size: 18px;
// `;
