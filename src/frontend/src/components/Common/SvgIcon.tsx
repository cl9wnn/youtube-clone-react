import React from "react";

interface SvgIconProps {
    path: string;
    size?: number;
    color?: string;
    style?: React.CSSProperties;
}

const SvgIcon :React.FC<SvgIconProps> = ({path, size, color,style }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
            <path d={path} fill-rule="evenodd"></path>
        </svg>
    )
};

export default SvgIcon;