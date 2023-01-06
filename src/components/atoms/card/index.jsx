import React from 'react';

export function Card({ children, color }) {
    return (
        <div className="flex bg-white w-fit rounded-lg">
            {children}
        </div>
    )
}