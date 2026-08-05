import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";


type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    isLoading?: boolean;
}

const Button = ({
    children,
    variant = "primary",
    isLoading = false,
    className,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={disabled || isLoading}
            className={clsx(
                "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-cyan-400/40",
                "disabled:cursor-not-allowed disabled:opacity-50",
                {
                    "bg-cyan-500 text-black hover:bg-cyan-400 active:scale-95":
                        variant === "primary",

                    "border border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-400 hover:bg-slate-800":
                        variant === "secondary",

                    "border border-red-500 bg-transparent text-red-400 hover:bg-red-500 hover:text-white":
                        variant === "danger",
                },
                className
            )}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
};

export default Button;