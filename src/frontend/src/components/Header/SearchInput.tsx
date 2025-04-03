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

const Input = styled.input`
    height: 36px;
    width: 525px;
    border-top: 1px solid #424242;
    border-bottom: 1px solid #424242;
    border-left: 1px solid #424242;
    border-right: none; 
    border-radius: 20px 0 0 20px;
    font-size: 16px;

    &::placeholder {
        font-size: 16px;
        color: #999;
        font-weight: 400;
        padding: 0 16px;
    }

    &:focus {
        outline: none;
        border: 1px solid #0047f4;
    }
`

const SearchInput: React.FC = () => {
  return (
    <>
      <Input type="text" placeholder="Введите запрос" />
      <SearchButton >
        <SvgIcon path={headerIcons.search} size={24} color={"white"}></SvgIcon>
      </SearchButton>
    </>
  )
}

export default SearchInput;