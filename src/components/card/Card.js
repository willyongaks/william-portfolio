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
                                <a href="#">
                                    <ProjectItemImage>
                                        <ProjectItemImageImg src={soshols} alt="Soshols" />
                                    </ProjectItemImage>
                                </a>
                                <ProjectItemDetails>
                                    <ProjectItemTitle>Soshols</ProjectItemTitle>
                                    <CategoryHolder>
                                        <a href="#"> <AiFillGithub/> Repository</a>
                                        <a href="#"> <BiRightArrow /> Live Demo</a>
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
                                        <a href="#"> <AiFillGithub/> Repository</a>
                                        <a href="#"> <BiRightArrow /> Live Demo</a>
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
                                        <a href="#"> <AiFillGithub/> Repository</a>
                                        <a href="#"> <BiRightArrow /> Live Demo</a>
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
                                        <a href="#"> <AiFillGithub/> Repository</a>
                                        <a href="#"> <BiRightArrow /> Live Demo</a>
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
