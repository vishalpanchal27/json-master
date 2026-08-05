import clsx from "clsx";
import type { ReactNode } from "react";

type CardProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    headerAction?: ReactNode;
};

const Card = ({
    title,
    subtitle,
    children,
    className,
    headerAction,
}: CardProps) => {
    return (
        <div
            className={clsx(
                "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg",
                className
            )}
        >
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        {title}
                    </h3>

                    {subtitle && (
                        <p className="mt-1 text-sm text-slate-400">
                            {subtitle}
                        </p>
                    )}
                </div>

                {headerAction && (
                    <div>
                        {headerAction}
                    </div>
                )}
            </div>

            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default Card;