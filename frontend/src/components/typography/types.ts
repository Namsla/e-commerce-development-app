import { ReactNode } from "react";

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
};
