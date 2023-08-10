export const baseClasses =
  "inline-flex items-center justify-center font-medium border rounded focus:outline-none";
export const sizeClasses = {
  small: "px-2.5 py-1.5 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-base",
};
export const variantClasses = {
  primary: "text-white bg-primary-500 border-primary-500 hover:bg-primary-600",
  secondary: "text-gray-700 bg-gray-200 border-gray-200 hover:bg-gray-300",
  success: "text-white bg-green-500 border-green-500 hover:bg-green-600",
  warning: "text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600",
  danger: "text-white bg-red-500 border-red-500 hover:bg-red-600",
};
export const outlineClasses = {
  true: "bg-transparent hover:bg-opacity-10",
  false: "",
} as Record<string, string>;
