import React from 'react'
import { 
  ProjectSection,
  ProjectTitle,
  ProjectContainer,
} from './ProjectStyles';
import  Card  from '../../card/Card';




function Projects() {
  return (
    <ProjectSection>
      
      <ProjectContainer className='container'>
        <ProjectTitle>
          Projects
        </ProjectTitle>
        <Card />
      </ProjectContainer>
    </ProjectSection>
      
  )
}

export default Projects;