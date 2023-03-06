import React from 'react';
import {
    ProjectSection,
    ProjectTitle,
    Skills,
    TabContent,
    ProjectItemImage,
    ProjectItemImageImg,
    ProjectItemDetails,
    ProjectItemTitle,
    CategoryHolder,
} from './CardStyles';
import soshols from '../assets/soshols.png';
import { Container } from 'react-bootstrap';

const Card = () => {
    return (
        <Container className='container'>
            <ProjectSection className='row align-items-center justify-content-center'>
                <ProjectTitle>
                    <h1>Projects</h1>
                </ProjectTitle>
                <Skills>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Typescript</p>
                </Skills>

                <div className="container">
                    <div className="row">
                        <TabContent>
                            <div className="project_item">
                                <a href="#">
                                    <ProjectItemImage>
                                        <ProjectItemImageImg src={soshols} alt="Soshols" />
                                    </ProjectItemImage>
                                </a>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <div className="category">
                                            <a href="#">Web Development</a>
                                        </div>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <a href="#">
                                    <ProjectItemImage>
                                        <ProjectItemImageImg src={soshols} alt="Soshols" />
                                    </ProjectItemImage>
                                </a>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <div className="category">
                                            <a href="#">Web Development</a>
                                        </div>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <a href="#">
                                    <ProjectItemImage>
                                        <ProjectItemImageImg src={soshols} alt="Soshols" />
                                    </ProjectItemImage>
                                </a>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <div className="category">
                                            <a href="#">Web Development</a>
                                        </div>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <a href="#">
                                    <ProjectItemImage>
                                        <ProjectItemImageImg src={soshols} alt="Soshols" />
                                    </ProjectItemImage>
                                </a>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <div className="category">
                                            <a href="#">Web Development</a>
                                        </div>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>
                        </TabContent>
                    </div>
                </div>
            </ProjectSection>
        </Container>
    );
};

export default Card;
