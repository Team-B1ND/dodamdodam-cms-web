import styled from "styled-components";

export const HomePostingButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePostingButtonText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;
