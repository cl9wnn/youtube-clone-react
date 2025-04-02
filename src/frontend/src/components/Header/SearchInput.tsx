import React from "react";
import styled from "styled-components";
import SvgIcon from "../Common/SvgIcon.tsx";

const Button = styled.button`
`

const SearchInput: React.FC = () => {
    return (
      <>
        <input type="text" placeholder="Введите запрос" />
      <Button >
          <SvgIcon path={"M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"} size={24} color={"white"}></SvgIcon>
      </Button>
      </>
    )
}

export default SearchInput;