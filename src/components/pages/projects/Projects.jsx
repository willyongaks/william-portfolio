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

function Projects() {
  return (
    <ProjectSection>
        <ProjectHeader>My recent projects</ProjectHeader>
    </ProjectSection>
  )
}

export default Projects;