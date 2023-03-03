import React from 'react'
import styled from 'styled-components';
import SosholsImage from '../../assets/soshols.png'



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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    border-radius: 9px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const ProjCardImage = styled.img`
    width: 300px;
    height: 100%;
    object-fit: cover;
    
`;

const ProjCardContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ProjCardTitle = styled.p`
    color: var(--text-color);
    margin: 0;
    font-size: var(--medium-font);
`;

const ProjCardDescription = styled.p`
    color: var(--text-color);
    margin: 0.5em 0 0;
`;





function Projects() {
  return (
    <ProjectSection>
        <ProjectHeader>My recent projects</ProjectHeader>
        <TabContent>
            <ProjCard>
                <ProjCardImage src={SosholsImage} alt="Project" />
                <ProjCardContent>
                    <ProjCardTitle>Soshols</ProjCardTitle>
                    <ProjCardDescription>This is a social media project that i was working on</ProjCardDescription>
                </ProjCardContent>
            </ProjCard>
        </TabContent>
    </ProjectSection>
  )
}

export default Projects;