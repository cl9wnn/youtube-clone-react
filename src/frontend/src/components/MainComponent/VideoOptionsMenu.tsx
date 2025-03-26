import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Icon from "../Common/Icon.tsx";

interface Option {
    label: string;
    path: string;
    onClick: () => void;
}

interface VideoOptionsMenuProps {
    options: Option[];
    onClose: () => void;
    style?: React.CSSProperties;
}

const MenuContainer = styled.div`
    position: absolute;
    background-color: #282828;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    padding: 8px 0;
    min-width: 360px;
    z-index: 10;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 12px;
    cursor: pointer;
    color: #e1e1e1;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
        background-color: #3d3d3d;
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: #555;
    margin: 5px 10px;
`;

const VideoOptionsMenu: React.FC<VideoOptionsMenuProps> = ({ options, onClose, style }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <MenuContainer ref={menuRef} style={style}>
            {options.map((option, index) => (
                <>
                    <MenuItem key={option.label} onClick={option.onClick}>
                        <Icon path={option.path} size={22} color={"white"} style={{marginRight: 14}}/>
                        {option.label}
                    </MenuItem>
                    {index === 3 && <Divider key={`divider-${index}`} />}
                </>
            ))}
        </MenuContainer>
    );
};

export default VideoOptionsMenu;