import React from "react";
import styled from "styled-components";
import SvgIcon from "../Common/SvgIcon.tsx";

const SideButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    display: flex;
    width: 60px;
    height: 70px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    margin-left: 7px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #2e2e2e;
        border-radius: 5px;
    }
`

const Title = styled.span`
    font-size: 10px;
`

interface CollapsedSidebarButtonProps {
    path: string;
    text: string;
    onClick?: () => void;
}

const CollapsedSidebarButton: React.FC<CollapsedSidebarButtonProps> = ({ path, text, onClick }) => {
    return (
        <SideButton onClick={onClick}>
            <SvgIcon path={path} size={24} color={"white"} style={{marginBottom: 6}}/>
            <Title>{text}</Title>
        </SideButton>
    );
};
export default CollapsedSidebarButton;