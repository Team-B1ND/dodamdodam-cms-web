import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY } from "../../constants/theme/theme.constant";
import Cookie from "../../lib/storage/Cookie";
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
    Cookie.set(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};

export default useTheme;
