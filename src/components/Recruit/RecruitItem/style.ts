import styled from "styled-components";
import { palette } from "../../../styles/paletts";

export const Container = styled.div`
  width: 430px;
  height: 270px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  box-shadow: ${palette.boxShadow};
  border-radius: 5px;
`;
