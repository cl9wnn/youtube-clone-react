import React from "react";
import styled from "styled-components";
import SvgIcon from "../Common/SvgIcon.tsx";
import {headerIcons} from "../../data/headerIcons.ts";

const SearchButton = styled.button`
    background-color: #232323;
    cursor: pointer;
    border: 1px solid #424242;
    border-radius: 0 20px 20px 0;
    height: 40px;
    padding: 0 18px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%; 
`;

const Input = styled.input`
    flex-grow: 1;
    height: 36px;
    border-top: 1px solid #303030;
    border-bottom: 1px solid #303030;
    border-left: 1px solid #303030;
    border-right: none;
    border-radius: 20px 0 0 20px;
    font-size: 16px;
    padding-left: 16px;

    &::placeholder {
        font-size: 16px;
        color: #999;
        font-weight: 400;
    }

    &:focus {
        outline: none;
        border: 1px solid #0047f4;
    }
`;

const SearchInput: React.FC = () => {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Введите запрос" />
      <SearchButton>
        <SvgIcon path={headerIcons.search} size={24} color={"white"} />
      </SearchButton>
    </SearchContainer>
  )
}

export default SearchInput;