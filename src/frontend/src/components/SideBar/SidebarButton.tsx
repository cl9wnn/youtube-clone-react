import React from "react";
import styled from "styled-components";
import Icon from "../Common/Icon.tsx";

const SideButton = styled.button`
    background: none;
    border: none; 
    color: #fff; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    margin-bottom: 15px; 
    padding: 10px; 
    cursor: pointer;

    &:hover {
        background-color: #444;
        border-radius: 5px;
    }
`

const Title = styled.span`
    font-size: 10px;
`

interface ElementButtonProps {
    path: string;
    text: string;
    onClick?: () => void;
}

const SidebarButton: React.FC<ElementButtonProps> = ({ path, text, onClick }) => {
    return (
        <SideButton onClick={onClick}>
            <Icon path={path} size={24} color={"white"} style={{marginBottom: 6}}/>
            <Title>{text}</Title>
        </SideButton>
    );
};
export default SidebarButton;