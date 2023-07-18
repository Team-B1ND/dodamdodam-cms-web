import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 20px;

  input[type="file"] {
    display: none;
  }
`;

export const CompanyNameInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  padding: 14px;
  box-sizing: border-box;
  font-size: 18px;
`;

export const EtcTextarea = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  resize: none;
  padding: 14px;
  box-sizing: border-box;
  font-size: 18px;
`;
