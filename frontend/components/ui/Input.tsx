import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <input
        className={cn(
          "h-12 w-full rounded-xl",
          "border border-zinc-700",
          "bg-zinc-900/70",
          "px-4",
          "text-white",
          "placeholder:text-zinc-500",
          "transition-all duration-300",
          "focus:border-violet-500",
          "focus:ring-2",
          "focus:ring-violet-500/30",
          "focus:outline-none",
          className
        )}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}