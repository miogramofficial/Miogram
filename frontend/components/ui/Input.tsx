import { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: LucideIcon;
}

export default function Input({
  label,
  error,
  className,
  leftIcon: LeftIcon,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <div className="group relative w-full">
        {LeftIcon && (
          <LeftIcon
        size={18}
        className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-violet-400
            pointer-events-none
            transition-all
            duration-300
            group-focus-within:text-violet-300
            group-focus-within:scale-110
        "
        />
        )}

        <input
          className={cn(
            "h-12 w-full rounded-xl",
            "border border-zinc-700",
            "bg-zinc-900/70",
            "text-white",
            "placeholder:text-zinc-500",
            "transition-all duration-300",
            "focus:border-violet-500",
            "focus:ring-2",
            "focus:ring-violet-500/30",
            "focus:outline-none",
            LeftIcon ? "pl-12 pr-4" : "px-4",
            className
          )}
          {...props}
        />
      </div>

      {error && (
        <span className="text-sm text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}