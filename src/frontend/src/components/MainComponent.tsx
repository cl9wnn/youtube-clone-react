import React from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard.tsx";
import {videos} from "../data/videos.ts"

const MainContainer = styled.div<MainContainerProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); 
    gap: 20px;
    padding: 20px 40px; 
    background-color: #0f0f0f;
    width: calc(100% - ${({ isOpen }) => (isOpen ? "250px" : "80px")});
    margin-left: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
    box-sizing: border-box;
    transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
`

interface MainContainerProps {
    isOpen: boolean;
}

const MainComponent: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <MainContainer isOpen={isOpen}>
            {videos.map((video, index) => (
                <VideoCard key={index} {...video} />
            ))}
        </MainContainer>
    );
};

export default MainComponent;