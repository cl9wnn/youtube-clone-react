import React from "react";
import styled from "styled-components";

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
const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
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
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d={path}></path>
                </svg>
            </Icon>
            <Title>{text}</Title>
        </SideButton>
    );
};
export default SidebarButton;