import React from "react";
import { tags } from "../../data/tags";
import Tag from "./Tag.tsx";
import styled from "styled-components";

const TagContainer = styled.div<{ isOpen: boolean }>`
    width: calc(100% - ${({ isOpen }) => (isOpen ? "260px" : "100px")});
    margin-left: ${({ isOpen }) => (isOpen ? "260px" : "100px")};
    display: flex;
    position: fixed;
    top: 60px;
    background-color: #0f0f0f;
    padding: 15px 10px 5px 10px;
    z-index: 100;
`;

interface TagSelectorProps {
  isOpen: boolean;
}

const TagSelector: React.FC<TagSelectorProps> = ({ isOpen }) => {
  return (
    <TagContainer isOpen={isOpen}>
      {tags?.map((tag, index) => (
        <Tag key={index} label={tag.label} onClick={tag.onClick} />
      ))}
    </TagContainer>
  );
};

export default TagSelector;