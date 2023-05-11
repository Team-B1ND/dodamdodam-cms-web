import { ButtonHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {}
