import React from "react";
import styled from "styled-components";
import SvgIcon from "../Common/SvgIcon.tsx";

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 130px; 
    display: block;
`;

const ImgIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-bottom: 6px;
    margin-right: 28px;
`

interface ExpandedSidebarButtonProps {
    iconType: "svg"|"img";
    path: string;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

const ExpandedSidebarButton: React.FC<ExpandedSidebarButtonProps> = ({iconType, path, text, isActive, onClick}) => {
    return (
        <SidebarButton onClick={onClick} isActive={isActive}>
            {iconType === "svg" ? (
                <SvgIcon path={path} size={24} color={"white"} style={{marginBottom: 6, marginRight: 28}}/>
            ): (
                <ImgIcon src={path} alt={text}></ImgIcon>
            )}
            <Title>{text}</Title>
        </SidebarButton>
    );
};

export default ExpandedSidebarButton;