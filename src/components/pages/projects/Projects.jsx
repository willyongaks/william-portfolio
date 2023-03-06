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

const ProectColumn = styled.div`
    position: relative;
    max-width: 80%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
`;



function Projects() {
  return (
      <Card />
  )
}

export default Projects;