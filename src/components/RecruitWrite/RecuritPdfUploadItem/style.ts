import styled from "styled-components";
import { ellipsisLine } from "@b1nd/b1nd-styled-components-util";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  min-width: 15%;
  max-width: 15%;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor4};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px;
`;

export const FileName = styled.span`
  font-size: 14px;
  ${ellipsisLine(2)};
  line-height: 18px;
  color: ${({ theme }) => theme.contrast};
`;

export const ModifyDate = styled.span`
  color: #666;
  font-size: 12px;
  margin-top: 5px;
`;

export const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: ${[palette.red[400]]};
  position: absolute;
  top: 5px;
  right: 5px;
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;
