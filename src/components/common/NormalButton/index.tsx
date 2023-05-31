import { NormalButtonProps } from "./types";
import * as S from "./style";

const NormalButton = ({
  children,
  customStyle,
  ...attr
}: NormalButtonProps) => {
  return <S.Button {...attr}>{children}</S.Button>;
};

export default NormalButton;
