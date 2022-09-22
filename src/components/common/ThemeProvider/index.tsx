import useTheme from "../../../hooks/theme/useTheme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { GlobalStyle } from "../../../styles/globalStyle";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { themeColor } = useTheme();

  return (
    <StyledThemeProvider theme={themeColor}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
