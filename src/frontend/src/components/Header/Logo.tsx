import logo from '../../assets/youtube-logo.png';
import styled from "styled-components";
import React from "react";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LogoImage = styled.img`
    width: 90px;
    height: 20px;
`

const RuText = styled.p`
    color: #bcbcbc;
    font-size: 10px;
    font-weight: 400;
    margin: 0 0 10px;
`

const Logo : React.FC = () => {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo"/>
            <RuText>RU</RuText>
        </LogoContainer>
    )
}

export default Logo;