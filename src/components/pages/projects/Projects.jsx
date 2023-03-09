import React from 'react'
import { 
  ProjectSection,
  ProjectContainer,
} from './ProjectStyles';
import  Card  from '../../card/Card';




function Projects() {
  return (
    <ProjectSection>
      <ProjectContainer className='container'>
        <Card />
      </ProjectContainer>
      
    </ProjectSection>
      
  )
}

export default Projects;