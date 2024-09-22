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
}
const DefaultButton: React.FC<IDefaultButton> = ({
    children,
    title,
    onClick,
    to,
    className,
    type,
    disabled
}) => {
    return (
        <Link
            onClick={onClick}
            href={to}
            hidden={disabled}
            className={`bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl ${className}`} type={type}>
            <div className="flex items-center justify-center">
                {children}
                {title}
            </div>
        </Link>
    );
}

export default DefaultButton;