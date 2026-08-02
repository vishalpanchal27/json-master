import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
}

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) => {
    const baseClasses =
        "rounded-lg px-5 py-2 font-medium transition duration-200";

    const variants = {
        primary:
            "bg-cyan-500 text-black hover:bg-cyan-400",

        secondary:
            "border border-slate-700 text-white hover:border-cyan-400",

        danger:
            "border border-red-500 text-red-400 hover:bg-red-500 hover:text-white",
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;