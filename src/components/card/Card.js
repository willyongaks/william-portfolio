import React from 'react';
import {
    ProjectSection,
    ProjectTitle,
    Skills,
    ProjectItemImage,
    ProjectItemImageImg,
    ProjectItemDetails,
    ProjectItemTitle,
    CategoryHolder,
} from './CardStyles';
import soshols from '../assets/soshols.png';

const Card = () => {
    return (
        <ProjectSection>
            <ProjectTitle>
                <h1>Projects</h1>
            </ProjectTitle>
            <Skills>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>MySQL</p>
                <p>PHP</p>
            </Skills>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xs-12 pb-4">
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
                    </div>
                </div>
            </div>
        </ProjectSection>
    );
};

export default Card;
