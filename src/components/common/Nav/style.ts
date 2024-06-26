import styled, { css } from "styled-components";
import { palette } from "../../../styles/paletts";

export const NavContainer = styled.div<{ isFold: boolean }>`
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor4};
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  border-right: 1px solid ${({ theme }) => theme.borderColor};

  ${({ isFold }) =>
    isFold
      ? css`
          min-width: 88px;
        `
      : css`
          min-width: 265px;
        `}
`;

export const NavLogoWrap = styled.div<{ isFold: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  padding: 0px 30px;
  box-sizing: border-box;

  ${({ isFold }) =>
    isFold &&
    css`
      justify-content: center;
    `}
`;

export const NavLogoImg = styled.img<{ isFold: boolean }>`
  width: 100px;
  object-fit: scale-down;
  transition: all 0.3s ease;
  position: absolute;
  left: 30px;

  ${({ isFold }) =>
    isFold
      ? css`
          display: none;
        `
      : css`
          display: block;
        `};
`;

export const NavMenuIcon = styled.div<{ isFold: boolean }>`
  width: 28px;
  height: 28px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${palette.gray[300]};
  margin-left: auto;

  ${({ isFold }) =>
    isFold &&
    css`
      margin-left: 0px;
    `}
`;

export const NavMenuItemWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  overflow: hidden;
  box-sizing: border-box;
`;
