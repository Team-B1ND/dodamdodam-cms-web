import { ButtonHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface NormalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {}
