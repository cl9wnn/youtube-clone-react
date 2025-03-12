import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput.tsx";
import Logo from "./Logo.tsx";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 10px 20px;
    margin-left: 80px;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`


const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <SearchInput/>
        </HeaderContainer>
    )
};

export default Header;
