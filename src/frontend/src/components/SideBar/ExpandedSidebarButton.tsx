import React from "react";
import styled from "styled-components";
import Icon from "../Common/Icon.tsx";

const SidebarButton = styled.button`
    background: none;
    border: none;
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
        border-radius: 12px;
    }
`;

const Title = styled.span`
    font-size: 15px;
    font-weight: 500;
`;

interface ExpandedSidebarButtonProps {
    path: string;
    text: string;
    onClick?: () => void;
}
const ExpandedSidebarButton: React.FC<ExpandedSidebarButtonProps> = ({path, text, onClick}) => {
    return (
        <SidebarButton onClick={onClick}>
            <Icon path={path} size={24} color={"white"} style={{marginBottom: 6, marginRight: 28}}/>
            <Title>{text}</Title>
        </SidebarButton>


    );
};

export default ExpandedSidebarButton;