import styled from "styled-components";
import React from "react";

const TagButton = styled.button`
    display: inline-flex;
    height: 35px;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    margin: 0 12px 12px 0;
    border-radius: 10px;
    border: none;
    background-color: #252525;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #3c3c3c;
    }

    &:active {
        background-color: #ffffff;
        color: #0f0f0f;
    }
`;

interface TagProps {
  label: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({label, onClick}) => {
  return (
    <TagButton onClick={onClick}>
      {label}
      </TagButton>
  );
};

export default Tag;