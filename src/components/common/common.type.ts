import React from "react";
import { CSSObject } from "styled-components";

export interface CommonComponentProps {
  children?: React.ReactNode;
  customStyle?: CSSObject;
}
