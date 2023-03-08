import React from 'react';
import {
    ProjectSection,
    ProjectTitle,
    TabContent,
    ProjectItemImage,
    ProjectItemImageImg,
    ProjectItemDetails,
    ProjectItemTitle,
    CategoryHolder,
} from './CardStyles';
import soshols from '../assets/soshols.png';
import shuzy from '../assets/shuzy.png';
import { Container } from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";

const Card = () => {
    return (
        <Container className='container'>
            <ProjectSection className='row align-items-center justify-content-center'>
                <ProjectTitle>
                    <h1>Projects</h1>
                </ProjectTitle>
                <div className="container">
                    <div className="row">
                        <TabContent>
                            <div className="project_item">
                                <ProjectItemImage>
                                    <ProjectItemImageImg src={soshols} alt="Soshols" />
                                </ProjectItemImage>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <a href="https://github.com/willyongaks/social-media"> <AiFillGithub/> Repository</a>
                                        <a href="https://frabjous-starburst-8fb180.netlify.app"> <BiRightArrow /> Live Demo</a>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <ProjectItemImage>
                                    <ProjectItemImageImg src={shuzy} alt="Soshols" />
                                </ProjectItemImage>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <a href="https://github.com/willyongaks/william-ongaki-semester-project-2"> <AiFillGithub/> Repository</a>
                                        <a href="https://glowing-alfajores-e68984.netlify.app/"> <BiRightArrow /> Live Demo</a>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <ProjectItemImage>
                                    <ProjectItemImageImg src={soshols} alt="Soshols" />
                                </ProjectItemImage>
                                
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <a href="https://github.com/willyongaks/course-assignment-jsframework-ongaki"> <AiFillGithub/> Repository</a>
                                        <a href="https://github.com/willyongaks/course-assignment-jsframework-ongaki"> <BiRightArrow /> Live Demo</a>
                                    </CategoryHolder>
                                </ProjectItemDetails>
                            </div>

                            <div className="project_item">
                                <ProjectItemImage>
                                    <ProjectItemImageImg src={soshols} alt="Soshols" />
                                </ProjectItemImage>
                            
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <a href="https://github.com/willyongaks/course-assignment-jsframework-ongaki"> <AiFillGithub/> Repository</a>
                                        <a href="https://rad-beijinho-aa0e53.netlify.app"> <BiRightArrow /> Live Demo</a>
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
