import {expandedSidebarLinks} from "../../data/expandedSidebarLinks.ts";
import styled from "styled-components";

const LinksGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 12px;
    margin-left: 20px;
`;

const LinkItem = styled.a`
    display: inline-flex;
    color: #979797;
    font-weight: 600;
    text-decoration: none;
    font-size: 13px;
    margin-right: 8px;
    white-space: nowrap;
`;

const Copyright = styled.p`
    color: #686868;
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
    margin-left: 20px;
`;

const LinksSection = () => {
  return (
    <>
      {expandedSidebarLinks.map((group, index) => (
        <LinksGroup key={index}>
          {group.map((text, i) => (
            <LinkItem key={i} href="#">{text}</LinkItem>
          ))}
        </LinksGroup>
      ))}
      <Copyright>&copy; 2025 Google LLC</Copyright>
    </>
  );
};

export default LinksSection;
