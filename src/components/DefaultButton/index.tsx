import Link from 'next/link';
import React from 'react';

export interface IDefaultButton {
    children?: React.ReactNode;
    title: string;
    onClick?: () => void;
    to: string;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename" | "none" | undefined;
}
const DefaultButton: React.FC<IDefaultButton> = ({
    children,
    title,
    onClick,
    to,
    className,
    type,
    disabled,
    target = "_self"
}) => {
    return (
        <Link
            target={target}
            onClick={onClick}
            href={to}
            hidden={disabled}
            className={className ?? "bg-yellow_d hover:bg-yellow_d text-white font-bold py-2 px-4 rounded-xl"} type={type}>
            <div className="flex items-center justify-center">
                {children}
                {title}
            </div>
        </Link>
    );
}

export default DefaultButton;