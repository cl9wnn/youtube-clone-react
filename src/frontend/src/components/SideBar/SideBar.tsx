import styled from "styled-components";
import React from "react";
import {sidebarButtons} from "../../data/sidebarButtons.ts";
import SidebarButton from "./SidebarButton.tsx";

interface SideBarContainerProps{
    isOpen: boolean;
}
const SidebarContainer = styled.aside<SideBarContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #0f0f0f;
    color: white;
    width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
`;

const ToggleButton = styled.button`
    background-color: transparent;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 12px 20px 20px;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`

const SideBar: React.FC<{ setSidebarOpen: (isOpen: boolean) => void; isOpen: boolean }> = ({ setSidebarOpen, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <ToggleButton onClick={() => setSidebarOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
            </ToggleButton>

            {sidebarButtons.map((btn, index) => (
                <SidebarButton
                    key={index}
                    path={btn.path}
                    text={btn.text}
                    onClick={() => console.log('click')} />
            ))}

        </SidebarContainer>
    );
};

export default SideBar;