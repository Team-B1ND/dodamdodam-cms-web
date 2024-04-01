import styled, { css, CSSObject } from "styled-components";
import { palette } from "../../../styles/paletts";
import { MenuDropdownButtonType } from "./types";

export const Container = styled.div<{
  customStyle?: CSSObject;
}>`
  width: 25px;
  height: 25px;
  position: relative;

  ${({ customStyle }) => customStyle}
`;

export const Wrap = styled.button<{ fontSize: number }>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize}px;
  background: none;
  color: ${palette.gray[400]};
  padding: 0px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  cursor: pointer;
  border: 1px solid #a1a1a1;

  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonContainer = styled.div<{
  customStyle?: CSSObject;
}>`
  width: 110px;
  display: flex;
  flex-direction: column;
  top: 28px;
  right: 0px;
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundColor4};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 2;
  border-radius: 5px;
  overflow: hidden;

  ${({ customStyle }) => customStyle}
`;

export const Button = styled.button<{
  buttonType: MenuDropdownButtonType;
  customStyle?: CSSObject;
}>`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  column-gap: 15px;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 0px;
  font-size: 15px;

  &:hover {
    filter: brightness(90%);
  }

  ${({ customStyle }) => customStyle}

  ${({ buttonType }) =>
    buttonType === "NORMAL" &&
    css`
      color: ${({ theme }) => theme.contrast};
    `}

  ${({ buttonType }) =>
    buttonType === "DELETE" &&
    css`
      color: ${palette.red[400]};
    `}
`;

export const ButtonIcon = styled.div<{
  customStyle?: CSSObject;
}>`
  width: 16px;
  height: 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ customStyle }) => customStyle}
`;
