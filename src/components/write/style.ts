import styled from "styled-components";
import { palette } from "../../styles/paletts";

export const WriteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const WriteHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WriteHeaderTitleInput = styled.input`
  width: 990px;
  height: 44px;
  font-size: 30px;
  border: 0px;
  background: none;
  outline: none;
  font-weight: bold;
`;

export const WriteHeaderSubmitButton = styled.button`
  width: 110px;
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${palette.boxShadow};
  border: 0px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  color: white;
  transition: all 0.3s ease;
  background: ${palette.mainGradient};

  &:hover {
    transform: translateY(-3px);
  }
`;
