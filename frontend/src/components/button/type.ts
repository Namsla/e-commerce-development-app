import { ReactNode } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonOutline = boolean;

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  outline?: ButtonOutline;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
