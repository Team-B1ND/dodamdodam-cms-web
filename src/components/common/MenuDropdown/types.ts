import { ButtonHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface MenuDropdownProps extends CommonComponentProps {
  onClose: VoidFunction;
  onToggle: VoidFunction;
  isOpen: boolean;
}

export interface MenuDropdownButtonsProps extends CommonComponentProps {}

export type MenuDropdownButtonType = "NORMAL" | "DELETE";

export interface MenuDropdownButtonProps extends CommonComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: MenuDropdownButtonType;
}

export interface MenuDropdownButtonIconProps
  extends Omit<CommonComponentProps, "children"> {
  icon: JSX.Element;
}
