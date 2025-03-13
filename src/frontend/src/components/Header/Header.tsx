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
    color: white;
    position: fixed;
    width: calc(100% - ${({ isOpen }) => (isOpen ? "250px" : "80px")});
    margin-left: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
    transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`


const Header: React.FC<{isOpen: boolean}> = ({isOpen}) => {
    return (
        <HeaderContainer isOpen={isOpen}>
            <Logo/>
            <SearchInput/>
        </HeaderContainer>
    )
};

export default Header;
