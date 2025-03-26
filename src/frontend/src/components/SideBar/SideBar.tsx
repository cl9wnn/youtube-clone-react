import styled from "styled-components";
import React from "react";
import { collapsedSidebarButtons } from "../../data/collapsedSidebarButtons.ts";
import { expandedSidebarButtons } from "../../data/expandedSidebarButtons.ts";
import CollapsedSidebarButton from "./CollapsedSidebarButton.tsx";
import ExpandedSidebarButton from "./ExpandedSidebarButton.tsx";
import Icon from "../Common/Icon.tsx";

interface SideBarContainerProps {
    isOpen: boolean;
}

const SidebarContainer = styled.aside<SideBarContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #0f0f0f;
    color: white;
    width: ${({ isOpen }) => (isOpen ? "230px" : "80px")};
`;

const ToggleButton = styled.button`
    background-color: transparent;
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 6px 14px 18px 14px;
    cursor: pointer;

    &:hover {
        background-color: #2e2e2e;
    }
`;
const SideBar: React.FC<{ setSidebarOpen: (isOpen: boolean) => void; isOpen: boolean }> = ({ setSidebarOpen, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <ToggleButton onClick={() => setSidebarOpen(!isOpen)}>
                <Icon path={"M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"} size={24} color={"white"}/>
            </ToggleButton>

            {isOpen
                ? expandedSidebarButtons.map((expandedBtn, index) => (
                    <ExpandedSidebarButton key={index} path={expandedBtn.path} text={expandedBtn.text} onClick={() => console.log("click")} />
                ))
                : collapsedSidebarButtons.map((collapsedBtn, index) => (
                    <CollapsedSidebarButton key={index} path={collapsedBtn.path} text={collapsedBtn.text} onClick={() => console.log("click")} />
                ))}
        </SidebarContainer>
    );
};

export default SideBar;