import { CommonComponentProps } from "../common.type";

export type FlexJustifyType = "center" | "start" | "end" | "between" | "around";
export type FlexAlignType = "start" | "end" | "center" | "baseline";
export type FlexDirectionType = "row" | "column";

export const FlexJustify = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
};

export const FlexAlign = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  baseline: "baseline",
};

export const FlexDirection = {
  row: "row",
  column: "column",
};

export interface FlexProps extends CommonComponentProps {
  gap?: number;
  justify?: FlexJustifyType;
  align?: FlexAlignType;
  direction?: FlexDirectionType;
}
