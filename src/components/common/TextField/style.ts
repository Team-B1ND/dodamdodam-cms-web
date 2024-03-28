import styled from "styled-components";

export const TextFieldContainer = styled.div`
  width: 100%;

  padding: 30px 0px 0px 0px;

  position: relative;

  label {
    position: absolute;

    left: 0px;
    top: 80%;

    font-size: 16px;
    font-weight: 700;

    transform: translateY(-90%);
    transition: all 0.2s ease;

    pointer-events: none;

    color: #969595;
  }

  input:is(:focus, :valid) ~ label {
    font-size: 12px;

    transform: translateY(-300%);
    color: #0f69f5;
  }
`;
export const TextFieldInput = styled.input`
  width: 496px;
  height: 45px;

  border: 0;
  outline: 0;

  font-size: 18px;
  font-weight: 700;

  color: #1b1c1d;

  background-color: #fafafc;

  &:focus {
    border: none;
    border-bottom: 1px solid #0f69f5;
  }
`;
