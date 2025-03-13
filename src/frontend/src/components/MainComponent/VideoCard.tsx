import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const VideoPreview = styled.div`
    background-color: gray;
    width: auto;
    height: auto;
    aspect-ratio: 16 / 9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    position: relative;
    overflow: hidden;
    border-radius: 12px; 
`

const Thumbnail = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
`

const VideoTimeText = styled.div`
    position: absolute;
    bottom: 8px; 
    right: 8px; 
    background-color: rgba(0, 0, 0, 0.62); 
    color: rgb(240, 240, 240);
    padding: 2px 6px; 
    border-radius: 4px; 
    font-size: 11px; 
    font-weight: bold;
`

const VideoInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 130px; 
    box-sizing: border-box;
`

const Icon = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%; 
    height: 100%; 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
`

const Title = styled.p`
    color: #f7f7f7;
    margin: 0;
    padding: 0 10px 7px;
    font-size: 16px;
    text-align: left;
`

const ChannelName = styled.p`
    margin: 0;
    font-weight:300;
    padding-left: 10px;
    color:#858585;
    font-size: 14px;
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    flex-wrap: wrap;

    & > p:nth-child(2) {
        margin-left: 4px; 
    }
`
const InfoText = styled.p`
    padding-bottom: 4px;
    margin: 0;
    font-weight:300;
    color:#858585;
    font-size: 14px;`

const SettingsBtn = styled.button`
    background-color: #007bff00;
    color: white;
    font-size: 22px;
    width: 32px;
    height: 32px;
    align-items: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`

interface VideoCardProps {
    thumbnail:string;
    videoTime:string;
    icon:string;
    title: string;
    channel:string;
    views:string;
    timeAgo:string;
}

const VideoCard: React.FC<VideoCardProps> = ({
    thumbnail, videoTime, icon, title, channel, views, timeAgo,
}) => {
    return (
        <>
            <CardContainer>
                <VideoPreview>
                    <Thumbnail src={thumbnail} alt="video-preview"/>
                    <VideoTimeText>{videoTime}</VideoTimeText>
                </VideoPreview>
                <VideoInfo>
                    <Icon src={icon} alt="channel-icon"/>
                    <TextContainer>
                        <Title>{title}</Title>
                        <ChannelName>{channel}</ChannelName>
                        <DataContainer>
                            <InfoText>{views}</InfoText>
                            <InfoText>• {timeAgo}</InfoText>
                        </DataContainer>
                    </TextContainer>
                    <SettingsBtn>⋮</SettingsBtn>
                </VideoInfo>
            </CardContainer>
        </>
    )
}

export default  VideoCard;