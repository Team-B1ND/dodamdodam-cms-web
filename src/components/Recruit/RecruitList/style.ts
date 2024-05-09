import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const YearWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;

  background-color: #fafafc;

  font-size: 15px;

  cursor: pointer;

  user-select: none;

  position: fixed;
  bottom: 50px;

  padding: 10px 10px 7px 10px;

  border-radius: 5px;
  border: 0;

  :hover {
    transition: all 0.3s ease;
    background-color: gainsboro;
  }
`;
