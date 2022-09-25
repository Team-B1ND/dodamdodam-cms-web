import { useRecoilValue } from "recoil";
import useTheme from "../../../hooks/theme/useTheme";
import { themeModeAtom } from "../../../store/theme/themeAtom";
import { ETheme } from "../../../types/enums/theme/theme.enum";
import { DarkmodeButtonContainer, DarkmodeButtonWrap } from "./style";

const DarkmodeButton = () => {
  const { handleTheme } = useTheme();
  const currentTheme = useRecoilValue(themeModeAtom);

  const { DARK } = ETheme;

  return (
    <DarkmodeButtonContainer onClick={handleTheme}>
      <DarkmodeButtonWrap>
        <span>{currentTheme === DARK ? "라이트" : "다크"} 모드로 보기</span>
      </DarkmodeButtonWrap>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
