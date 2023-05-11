import * as S from "./style";
import { SubmitButtonProps } from "./types";

const SubmitButton = ({
  children,
  customStyle,
  ...attr
}: SubmitButtonProps) => {
  return <S.Button {...attr}>{children}</S.Button>;
};

export default SubmitButton;
