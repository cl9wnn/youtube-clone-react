import React from "react";
import ExpandedSidebarButton from "./ExpandedSidebarButton.tsx";
import styled from "styled-components";


const Boundary = styled.hr`
    display: block;
    width: 100%;
    border: none;
    border-top: 1px solid #474747;
    margin: 10px 12px;
`
const Title = styled.h4`
    margin: 6px 20px 5px 20px;
    font-size: 15px;
`

const SidebarBtnSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

interface SidebarButtonData {
  path: string;
  text: string;
}

 interface SidebarSection {
  title?: string;
  iconType: "svg" | "img";
  buttons: SidebarButtonData[];
}


interface SidebarSectionProps {
  section: SidebarSection;
  activeButton: string;
  setActiveButton: (path: string) => void;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ section, activeButton, setActiveButton }) => (
  <SidebarBtnSection>
    {section.title && <Title>{section.title}</Title>}
    {section.buttons.map((button, btnIndex) => (
      <ExpandedSidebarButton
        key={btnIndex}
        iconType={section.iconType}
        path={button.path}
        text={button.text}
        isActive={activeButton === button.path}
        onClick={() => setActiveButton(button.path)}
      />
    ))}
    <Boundary />
  </SidebarBtnSection>
);

export default SidebarSection;