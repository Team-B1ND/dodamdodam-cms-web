import styled, { CSSObject } from "styled-components";
import { palette } from "../../../styles/paletts";

export const Button = styled.button<{ customStyle?: CSSObject }>`
  width: 110px;
  min-height: 44px;
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
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

  ${({ customStyle }) => customStyle}
`;
