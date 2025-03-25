import React from "react";

interface IconProps {
    path: string;
    size?: number;
    color?: string;
    style?: React.CSSProperties;
}

const Icon :React.FC<IconProps> = ({path, size, color,style }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
            <path d={path}></path>
        </svg>
    )
};

export default Icon;