import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const HomePostingButtonContainer = styled.button`
  width: 128px;
  height: 45px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 0px;
  cursor: pointer;
  box-shadow: ${palette.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const HomePostingButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePostingButtonText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;