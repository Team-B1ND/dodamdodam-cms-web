import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY } from "../../constants/theme/theme.constant";
import cookie from "../../lib/cookie/cookie";
import { themeModeAtom } from "../../store/theme/themeAtom";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ETheme } from "../../types/enums/theme/theme.enum";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeModeAtom);

  const { DARK, LIGHT } = ETheme;

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === DARK ? darkTheme : lightTheme;
  }, [DARK, currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme = currentTheme === DARK ? LIGHT : DARK;
    cookie.setCookie(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};

export default useTheme;
