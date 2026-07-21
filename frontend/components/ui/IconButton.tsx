import { ButtonHTMLAttributes } from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}