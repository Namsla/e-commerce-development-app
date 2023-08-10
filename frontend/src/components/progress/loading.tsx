import type { FC } from "react";
import { Spinner } from "./spinner";

interface PageLoadingProps {
  message?: string;
}

export const Loading: FC<PageLoadingProps> = ({ message }) => {
  return (
    <div className="flex h-full grow items-center justify-center">
      <div className="space-y-3">
        <Spinner className="mx-auto" variant="success" />
        <div>{message}</div>
      </div>
    </div>
  );
};
