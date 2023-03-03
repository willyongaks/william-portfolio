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
const ProjCard = styled.div`
    margin: 0px 0px 1.5em;
    osition: relative;
    cursor: pointer;
    object-fit: cover;
    background-color: var(--secondary-color);
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 1.4rem 2rem;
    display: flex;
    align-items: flex-end;
    border-radius: 9px;
    break-inside: avoid;
`;
function Projects() {
  return (
    <ProjectSection>
        <ProjectHeader>My recent projects</ProjectHeader>
        <TabContent>
            <ProjCard>

            </ProjCard>
        </TabContent>
    </ProjectSection>
  )
}

export default Projects;