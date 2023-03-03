import React from 'react'
import styled from 'styled-components';


const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    alighn-items: center;
    justify-content: center;
`;

const ProjectHeader = styled.h1`
    color: var(--text-color);
    text-align: center;
`;

const TabContent = styled.div`
    margin: 1.5em 0px;
`;

function Projects() {
  return (
    <ProjectSection>
        <ProjectHeader>My recent projects</ProjectHeader>
        <TabContent></TabContent>
    </ProjectSection>
  )
}

export default Projects;