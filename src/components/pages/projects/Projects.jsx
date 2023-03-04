import React from 'react'
import styled from 'styled-components';
import  Card  from '../../card/Card';



const ProjectWrapper = styled.section`
    width: 100%;
    height: 100vh;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 576px){
        max-width: 540px;
    }
`;

const ProjectHeader = styled.h1`
    color: var(--text-color);
    text-align: center;
`;

const ProectRow = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

const ProectColumn = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
`;

const TabContent = styled.div`
    margin: 1.5em 0px;
    animation-duration: 1s;
    animation-name: fadeInUp;
    animation-fill-mode: both;
    column-gap: 1.5em;

    @media only screen and (min-width: 1024px) {
        column-count: 2;
    }
`; 



function Projects() {
  return (
      <ProjectWrapper>
        <ProjectHeader>My recent projects</ProjectHeader>
          <ProectRow>
              <ProectColumn>
                <TabContent>
                    <Card />
                    <Card />
                </TabContent>
                
              </ProectColumn>  
          </ProectRow>
      </ProjectWrapper>
  )
}

export default Projects;