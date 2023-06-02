import {
  MenuDropdownProps,
  MenuDropdownButtonsProps,
  MenuDropdownButtonProps,
  MenuDropdownButtonIconProps,
} from "./types";
import * as S from "./style";
import { useOutsideClick } from "@b1nd/b1nd-react-util";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { createContext, useRef } from "react";

const MenuDropdownContext = createContext<{
  isOpen: boolean;
  onClose: VoidFunction;
}>({
  isOpen: false,
  onClose: () => {},
});

const MenuDropdown = ({
  isOpen,
  onClose,
  children,
  customStyle,
  onToggle,
}: MenuDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    container: containerRef.current,
    callback: onClose,
  });

  return (
    <MenuDropdownContext.Provider value={{ isOpen, onClose }}>
      <S.Container ref={containerRef} customStyle={customStyle}>
        <S.Wrap
          fontSize={
            (typeof customStyle?.width === "number" &&
              customStyle?.width &&
              customStyle.width - 15) ||
            24
          }
          onClick={onToggle}
        >
          <BsThreeDots />
        </S.Wrap>
        {isOpen && children}
      </S.Container>
    </MenuDropdownContext.Provider>
  );
};

const MenuDropdownButtons = ({
  children,
  customStyle,
}: MenuDropdownButtonsProps) => {
  return (
    <S.ButtonContainer customStyle={customStyle}>{children}</S.ButtonContainer>
  );
};

const MenuDropdownButton = ({
  children,
  customStyle,
  buttonType,
  ...attr
}: MenuDropdownButtonProps) => {
  return (
    <S.Button {...attr} customStyle={customStyle} buttonType={buttonType}>
      {children}
    </S.Button>
  );
};

const ButtonIcon = ({ icon, customStyle }: MenuDropdownButtonIconProps) => {
  return <S.ButtonIcon customStyle={customStyle}>{icon}</S.ButtonIcon>;
};

export default Object.assign(MenuDropdown, {
  Buttons: MenuDropdownButtons,
  Button: Object.assign(MenuDropdownButton, {
    Icon: ButtonIcon,
  }),
});
