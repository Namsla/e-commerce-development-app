import React from "react";
import clsx from "clsx";
import { HeadingProps } from "./types";
import { defaultClasses, levelClasses } from "./styles";

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  className,
  children,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = clsx(defaultClasses, levelClasses[level], className);

  return <Tag className={headingClasses}>{children}</Tag>;
};

export default Heading;
