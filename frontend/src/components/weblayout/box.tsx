import { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";

interface BoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  align?: "center" | "start" | "end" | "stretch";
  justify?: "center" | "start" | "end" | "between" | "around";
  cols?: string;
  rows?: string;
  gap?: string;
  flow?: "horizontal" | "vertical";
}

const Box: React.FC<BoxProps> = ({
  align,
  justify,
  cols,
  rows,
  gap,
  flow,
  className = "",
  children,
  ...rest
}) => {
  const boxClasses = clsx(
    className,
    align && `flex items-${align}`,
    justify && `flex justify-${justify}`,
    cols && `grid grid-cols-${cols}`,
    rows && `grid grid-rows-${rows}`,
    gap && `gap-${gap}`,
    flow === "horizontal"
      ? "flex flex-row"
      : flow === "vertical"
      ? "flex flex-col"
      : ""
  );

  return (
    <div className={boxClasses} {...rest}>
      {children}
    </div>
  );
};

export default Box;
