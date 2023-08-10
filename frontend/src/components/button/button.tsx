import React from "react";
import clsx from "clsx";
import {
  baseClasses,
  outlineClasses,
  sizeClasses,
  variantClasses,
} from "./styles";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  outline = false,
  icon,
  children,
  className,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const buttonClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    outlineClasses[outline.toString()],
    className
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
