import { type FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
    success:
      "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
