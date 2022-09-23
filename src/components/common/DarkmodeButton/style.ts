import styled from "styled-components";

export const DarkmodeButtonContainer = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 45px 15px 45px 45px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  transition: all 0.3s;
  outline: none;
  box-shadow: 5px 5px 5px 0 rgb(0 0 0 / 10%);
  border: 0px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.contrast};
  background-color: ${({ theme }) => theme.darkmodeButtonColor};
  &:hover {
    color: white;
    background-color: #575757;
  }
`;

export const DarkmodeButtonWrap = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-evenly;
  span {
    font-size: 0.8rem;
  }
`;
