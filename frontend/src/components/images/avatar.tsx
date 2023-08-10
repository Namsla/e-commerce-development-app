import React from "react";
import clsx from "clsx";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "medium",
  rounded = false,
  className = "",
}) => {
  const avatarClasses = clsx(
    "inline-block",
    {
      "w-8 h-8": size === "small",
      "w-12 h-12": size === "medium",
      "w-16 h-16": size === "large",
      "rounded-full": rounded,
    },
    className
  );

  return <img src={src} alt={alt} className={avatarClasses} />;
};

export default Avatar;
