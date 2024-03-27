import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 98%;
  height: 84vh;

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
  width: 478px;
  height: 160px;

  border-radius: 10px;

  border: 1px solid #d9d9d9;

  background-color: #fafafc;

  padding: 10px;

  font-size: 16px;
  font-weight: 600;

  resize: none;
`;

export const RecruitUpload = styled.button`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;

  border: 10px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 600;
  color: white;

  background-color: #5d8bff;

  margin-top: 30px;
`;

export const UploadContainer = styled.div`
  margin-top: -20px;
  width: 500px;
  height: 777px;
`;

export const InputContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const FileUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 450px;
  height: 45px;

  border-radius: 10px;
  border: 1px solid #d9d9d9;

  background-color: #f2f2f2;

  font-size: 14px;
`;

export const JobContainer = styled.div`
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

  padding-left: 4px;

  user-select: none;
`;

export const JobListBox = styled.div`
  display: flex;

  gap: 10px;
  flex-wrap: wrap;

  user-select: none;

  margin-top: -30px;
`;

export const JobList = styled.div`
  display: flex;
  border-radius: 10px;

  color: black;
  font-family: Pretendard-SemiBold, Apple SD Gothic Neo, Malgun Gothic;

  padding: 14px 14px 14px 14px;

  cursor: pointer;

  background-color: white;
`;

export const JobBox = styled.div`
  display: flex;
`;

export const UploadBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Test = styled.div`
  display: flex;
  width: 500px;
  height: 90px;

  z-index: 999;
`;

export const SmailTitle = styled.p`
  font-size: 12px;
  color: #0f69f5;
`;

export const Img = styled.img`
  width: 580px;
  height: 770px;

  border-radius: 10px;
`;

export const UploadIconBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  height: 100%;
`;
