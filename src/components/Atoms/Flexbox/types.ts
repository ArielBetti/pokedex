export type TJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type TAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export interface IFlexBoxProps {
  direction: "row" | "column";
  justify: TJustifyContent;
  align: TAlignItems;
  width?: "xsm" | "sm" | "md" | "lg" | "xl";
  gap?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
}
