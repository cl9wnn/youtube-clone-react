import React, {useState} from "react";
import styled from "styled-components";

interface SideBarContainerProps{
    isOpen: boolean;
}
const SidebarContainer = styled.aside<SideBarContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    height:100vh;
    background-color: #43598e;
    color: white;
    width: ${({isOpen}) => (isOpen ? '250px' : '80px')};
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
`;

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <SidebarContainer isOpen = {isOpen}>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                <img src="" alt=""/>
            </ToggleButton>
        </SidebarContainer>
    )
}

export default SideBar;