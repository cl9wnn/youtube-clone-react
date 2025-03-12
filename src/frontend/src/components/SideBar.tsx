import styled from "styled-components";
import React from "react";

interface SideBarContainerProps{
    isOpen: boolean;
}
const SidebarContainer = styled.aside<SideBarContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #43598e;
    color: white;
    width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
    transition: width 0.3s ease-in-out;
`;

const ToggleButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
`;

const SideBar: React.FC<{ setSidebarOpen: (isOpen: boolean) => void; isOpen: boolean }> = ({ setSidebarOpen, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <ToggleButton onClick={() => setSidebarOpen(!isOpen)}>
                <img src="" alt="" />
            </ToggleButton>
        </SidebarContainer>
    );
};

export default SideBar;