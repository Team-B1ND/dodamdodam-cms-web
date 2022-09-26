import styled, { css } from "styled-components";
import { palette } from "../../../styles/paletts";

export const HomeNoticeItemContainer = styled.div`
  width: 98%;
  min-height: 80px;
  padding: 15px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeNoticeItemLeftWrap = styled.div`
  height: 100%;
  display: flex;
  column-gap: 10px;
`;

export const HomeNoticeItemTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeNoticeItemTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeNoticeItemRightWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeNoticeItemStatusLabel = styled.span<{
  status: "ACTIVE" | "PENDING";
}>`
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ status }) =>
    status === "ACTIVE"
      ? css`
          color: ${palette.lime[300]};
        `
      : css`
          color: ${palette.yellow[700]};
        `}
`;

export const HomeNoticeItemDate = styled.span`
  font-size: 15px;
  color: ${palette.gray[400]};
`;

export const HomeNoticeItemSettingButtonWrap = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
`;

export const HomeNoticeItemSettingButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background: none;
  color: ${palette.gray[400]};
  padding: 0px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export const HomeNoticeItemSettingModal = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  top: 28px;
  right: 0px;
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundColor4};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 2;
`;

export const HomeNoticeItemSettingModalItem = styled.div`
  width: 100%;
  height: 50px;
`;
