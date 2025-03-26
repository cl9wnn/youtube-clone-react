import React from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard.tsx";
import {videos} from "../../data/videos.ts"

const MainContainer = styled.div<MainContainerProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); 
    gap: 20px;
    padding: 20px 40px 20px 10px; 
    background-color: #0f0f0f;
    width: calc(100% - ${({ isOpen }) => (isOpen ? "230px" : "80px")});
    margin-left: ${({ isOpen }) => (isOpen ? "230px" : "80px")};
    box-sizing: border-box;
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