import React from "react";
import styled from "styled-components";
import VideoCard from "./VideoItem.tsx";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 20px; 
    padding: 20px; 
    background-color: #213547;
`


const MainComponent: React.FC = () => {
    return (
        <MainContainer>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </MainContainer>
    )
}

export default MainComponent;