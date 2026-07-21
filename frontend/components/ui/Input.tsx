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
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        className={cn(
          "h-12 rounded-xl border border-gray-300 px-4",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}