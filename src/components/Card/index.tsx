import React from 'react';

export interface ICard {
    children: React.ReactNode;
}
const Card: React.FC<ICard> = ({
    children
}) => {
    return (
        <div className="flex flex-col max-w-[100%] bg-gray-200 m-4 animate-bounceIn rounded-tr-3xl rounded-bl-3xl justify-between">
            {children}
        </div>
    );
}

export default Card;