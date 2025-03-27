import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput.tsx";
import Logo from "./Logo.tsx";
import Icon from "../Common/Icon.tsx";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #0f0f0f;
    padding: 5px 16px;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

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
    margin: 6px 12px 12px 0;
    cursor: pointer;

    &:hover {
        background-color: #2e2e2e;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const CenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}
const Header: React.FC<HeaderProps> = ({setSidebarOpen, isOpen}) => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <ToggleButton onClick={() => setSidebarOpen(!isOpen)}>
                    <Icon path={"M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"} size={24} color={"white"}/>
                </ToggleButton>
                <Logo/>
            </LeftContainer>

            <CenterContainer>
                <SearchInput/>
            </CenterContainer>

            <RightContainer>

            </RightContainer>

        </HeaderContainer>
    )
};

export default Header;
