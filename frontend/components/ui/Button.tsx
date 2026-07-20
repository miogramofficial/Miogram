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
        "h-12 px-5 rounded-xl font-semibold transition-all duration-200 focus:outline-none";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
            "bg-gray-200 text-black hover:bg-gray-300",

        outline:
            "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50",

        ghost:
            "bg-transparent text-gray-900 hover:bg-gray-100",

        danger:
            "bg-red-600 text-white hover:bg-red-700",
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