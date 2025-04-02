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

const RoundButton = styled.button`
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

const CreateButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20%;
    background-color: #2e2e2e;

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
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ImgIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}
const Header: React.FC<HeaderProps> = ({setSidebarOpen, isOpen}) => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <RoundButton onClick={() => setSidebarOpen(!isOpen)}>
                    <SvgIcon path={headerIcons.menu} size={24} color={"white"}/>
                </RoundButton>
                <Logo/>
            </LeftContainer>

            <CenterContainer>
                <SearchInput/>
                <RoundButton>
                  <SvgIcon path={headerIcons.microphone} size={24} color={"white"}></SvgIcon>
                </RoundButton>
            </CenterContainer>

            <RightContainer>
              <CreateButton>
                <SvgIcon path={headerIcons.create} size={24} color={"white"}/>
                <span>Создать</span>
              </CreateButton>
              <RoundButton>
                <SvgIcon path={headerIcons.notify} size={24} color={"white"}></SvgIcon>
              </RoundButton>
              <RoundButton>
                <ImgIcon src={headerIcons.account} alt={"account"}></ImgIcon>
              </RoundButton>
            </RightContainer>

        </HeaderContainer>
    )
};

export default Header;
