import { FlexContainer } from "./style";
import { FlexProps } from "./types";

export const Flex = ({
  gap,
  justify,
  align,
  direction,
  customStyle,
  children,
}: FlexProps) => {
  return (
    <FlexContainer
      customStyle={customStyle}
      justify={justify}
      align={align}
      gap={gap}
      direction={direction}
    >
      {children}
    </FlexContainer>
  );
};
