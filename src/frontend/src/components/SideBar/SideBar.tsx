import styled from "styled-components";
import React, {useState} from "react";
import { collapsedSidebarButtons } from "../../data/collapsedSidebarButtons.ts";
import { expandedSidebarButtons } from "../../data/expandedSidebarButtons.ts";
import CollapsedSidebarButton from "./CollapsedSidebarButton.tsx";
import ExpandedSidebarButton from "./ExpandedSidebarButton.tsx";

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
    margin-top: 74px;
    width: ${({isOpen}) => (isOpen ? "230px" : "80px")};
    overflow-y: hidden;
    overflow-x: hidden;

    &:hover {
        overflow-y: auto;
    }

    &::-webkit-scrollbar {
        width: 8px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(106, 106, 106);
        border-radius: 0;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &:hover::-webkit-scrollbar {
        opacity: 1;
    }
`;

const SideBar: React.FC<SideBarContainerProps> = ({isOpen}) => {
    const [activePath, setActivePath] = useState(expandedSidebarButtons[0]?.path || "");

    return (
        <SidebarContainer isOpen={isOpen}>
            {isOpen
                ? expandedSidebarButtons.map((expandedBtn, index) => (
                    <ExpandedSidebarButton key={index} path={expandedBtn.path} text={expandedBtn.text} isActive={activePath === expandedBtn.path} onClick={() => setActivePath(expandedBtn.path)} />
                ))
                : collapsedSidebarButtons.map((collapsedBtn, index) => (
                    <CollapsedSidebarButton key={index} path={collapsedBtn.path} text={collapsedBtn.text} onClick={() => console.log("click")} />
                ))}
        </SidebarContainer>
    );
};

export default SideBar;