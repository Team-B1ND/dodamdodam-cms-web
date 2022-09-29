import styled, { css } from "styled-components";
import { palette } from "../../../../styles/paletts";

export const NavMenuItemContainer = styled.div<{
  isSelect: boolean;
  isFold: boolean;
  color: string;
}>`
  height: 45px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #eaf3fd;
  }

  ${({ isSelect }) =>
    isSelect &&
    css`
      border-radius: 5px;
      background: ${palette.mainGradient};
    `}

  ${({ isFold }) =>
    isFold
      ? css`
          width: 45px;
          border-radius: 100%;
          justify-content: center;
        `
      : css`
          padding: 0px 15px;
          border-radius: 5px;
          width: 100%;
          justify-content: start;
        `}
`;

export const NavMenuItemIcon = styled.div<{
  color: string;
  isSelect: boolean;
}>`
  width: 18px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isSelect, color }) =>
    isSelect
      ? css`
          color: white;
        `
      : css`
          color: ${color};
        `}
`;

export const NavMenuItemText = styled.span<{
  isSelect: boolean;
  isFold: boolean;
}>`
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
  white-space: nowrap;
  margin-left: 20px;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: white;
        `
      : css`
          color: ${palette.gray[400]};
        `}

  ${({ isFold }) =>
    isFold
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
