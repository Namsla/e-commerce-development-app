import React from "react";
import clsx from "clsx";
import Nav from "../navigation/nav";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  const containerClasses = clsx("container mx-auto px-4 h-screen", className);

  return (
    <div className={containerClasses}>
      <Nav />
      {children}
    </div>
  );
};

export default Container;
