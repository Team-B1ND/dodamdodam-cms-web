import { THEME_KEY } from "../../constants/theme/theme.constant";
import cookie from "../../lib/cookie/cookie";
import { ETheme } from "../../types/enums/theme/theme.enum";

export const getTheme = (): ETheme => {
  const themeMode = cookie.getCookie(THEME_KEY);

  if (themeMode === null) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: light)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  const theme: ETheme = themeMode as ETheme;

  if (theme === ETheme.DARK) {
    return ETheme.DARK;
  }

  return ETheme.LIGHT;
};
