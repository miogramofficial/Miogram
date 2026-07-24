import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
    const baseStyle =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500 hover:scale-[1.02] shadow-lg shadow-violet-700/30",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",

    outline:
      "border border-violet-500 text-violet-400 bg-transparent hover:bg-violet-500/10",

    ghost:
      "bg-transparent text-zinc-300 hover:bg-zinc-800",

    danger:
      "bg-red-600 text-white hover:bg-red-500",
  };

  return (
    <button
        className={cn(
    "inline-flex items-center justify-center",
    "h-14 w-full",
    "rounded-full",
    "bg-blue-600",
    "text-white",
    "font-semibold",
    "text-base",
    "transition-all duration-300",
    "hover:bg-blue-500",
    "hover:scale-[1.02]",
    "active:scale-[0.98]",
    "shadow-lg shadow-blue-700/30",
    "disabled:opacity-50 disabled:pointer-events-none",
    className
    )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}