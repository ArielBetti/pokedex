import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
  onClick: (e?: any) => void | any;
}
