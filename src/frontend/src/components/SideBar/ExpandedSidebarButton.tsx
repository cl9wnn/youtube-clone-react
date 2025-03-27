import React from "react";
import styled from "styled-components";
import Icon from "../Common/Icon.tsx";

const SidebarButton = styled.button<{isActive:boolean}>`
    background: ${({ isActive }) => (isActive ? "#2e2e2e" : "none")};
    border: none;
    border-radius: 12px;
    color: #fff;
    display: flex;
    width: 200px;
    height: 42px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #2e2e2e;
    }
`;

const Title = styled.span`
    font-size: 15px;
    font-weight: 500;
`;

interface ExpandedSidebarButtonProps {
    path: string;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

const ExpandedSidebarButton: React.FC<ExpandedSidebarButtonProps> = ({path, text, isActive, onClick}) => {
    return (
        <SidebarButton onClick={onClick} isActive={isActive}>
            <Icon path={path} size={24} color={"white"} style={{marginBottom: 6, marginRight: 28}}/>
            <Title>{text}</Title>
        </SidebarButton>
    );
};

export default ExpandedSidebarButton;