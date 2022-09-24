import styled, { css } from "styled-components";

export const NavMenuItemContainer = styled.div<{
  isSelect: boolean;
  isFold: boolean;
  color: string;
}>`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ isSelect }) =>
    isSelect &&
    css`
      width: 40px;
      border-radius: 5px;
      justify-content: center;
    `}

  ${({ isFold }) =>
    !isFold &&
    css`
      width: 100%;
      border-radius: 100%;
      justify-content: start;
    `}
`;

export const NavMenuItemIcon = styled.div<{ color: string }>`
  width: 20px;
  font-size: 20px;
  color: ${({ color }) => color};
`;

export const NavMenuItemText = styled.span<{ isFold: boolean }>`
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
  white-space: nowrap;
  margin-left: 20px;

  ${({ isFold }) =>
    isFold
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
