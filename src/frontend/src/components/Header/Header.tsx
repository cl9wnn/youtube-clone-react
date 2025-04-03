import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput.tsx";
import Logo from "./Logo.tsx";
import SvgIcon from "../Common/SvgIcon.tsx";
import {headerIcons} from "../../data/headerIcons.ts";

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

const StyledButton = styled.button`
    background-color: transparent;
    color: white;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #2e2e2e;
    }
`;

const ToggleButton = styled(StyledButton)`
    margin: 6px 12px 12px 0;
`;

const MicrophoneButton = styled(StyledButton)`
    background-color: #2c2c2c;
    margin-left: 14px;
    flex-shrink: 0;
    
    &:hover {
        background-color: #454545;
    }
`;

const AccountBtn = styled(StyledButton)`
    width: 34px;
    height: 34px;
    margin-right: 14px;
`;

const NotifyButton = styled(StyledButton)`
    width: 38px;
    height: 38px;
    margin-right: 14px;
`;

const CreateButton = styled.button`
    display: flex;
    padding: 6px 12px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 18px;
    background-color: #2c2c2c;
    margin-right: 14px;

    cursor: pointer;

    &:hover {
        background-color: #454545;
    }
`

const ImgIcon = styled.img`
    width: 34px;
    height: 34px;
    object-fit: cover;
    border-radius: 50%;
`

const CreateText = styled.span`
    font-weight: 600;
    font-size: 14px;
    margin-left: 5px;
`

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
    flex-grow: 1;
    max-width: 75vh;
    margin: 0 20px; 
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
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
                    <SvgIcon path={headerIcons.menu} size={24} color={"white"}/>
                </ToggleButton>
                <Logo/>
            </LeftContainer>

            <CenterContainer>
                <SearchInput/>
                <MicrophoneButton>
                  <SvgIcon path={headerIcons.microphone} size={24} color={"white"}></SvgIcon>
                </MicrophoneButton>
            </CenterContainer>

            <RightContainer>
              <CreateButton>
                <SvgIcon path={headerIcons.create} size={24} color={"white"}/>
                <CreateText>Создать</CreateText>
              </CreateButton>
              <NotifyButton>
                <SvgIcon path={headerIcons.notify} size={24} color={"white"}></SvgIcon>
              </NotifyButton>
              <AccountBtn>
                <ImgIcon src={headerIcons.account} alt={"account"}></ImgIcon>
              </AccountBtn>
            </RightContainer>

        </HeaderContainer>
    )
};

export default Header;
