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
    "h-12 px-5 rounded-full font-semibold transition-all duration-300 focus:outline-none active:scale-[0.98]";

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
        baseStyle,
        variants[variant],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}