import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImage.png';
import Projects from '../projects/Projects';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding-left: 0rem;
    padding-right: 1rem;

    & > div:first-child {
      order: 2;
    }
    & > div:last-child {
      order: 1;
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  height: 60%;

  @media screen and (max-width: 768px) {
    padding: none;
  }
`;


const Header = styled.h1`
  font-size: calc(var(--Large-font) + 9px);
  margin-bottom: 1rem;
  color: var(--text-color);
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: calc(var(--Large-font) + 6px);
  }
  @media screen and (max-width: 480px) {
    font-size: calc(var(--Large-font) + 3px);
  }
`;

const SubHeader = styled.div`
  font-size: var(--Medium-font);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--text-color);

`;

const HeaderText = styled.p`
  color: var(--text-color);
`;

const HeaderTextSpan = styled.span`
  color: var(--secondary-color);
`;

const HeroButton = styled.button`
  width: 30%;
  padding: 12px;
  background: transparent;
  border: 1px solid var(--secondary-color);

  a{
    text-decoration: none;
    color: var(--secondary-color);
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }
  
`;

const RightSide = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
const Circle = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  background: linear-gradient(var(--secondary-color), var(--primary-color));
  opacity: 1;
  z-index: 0;
`;

const ProjectContainer = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <>
      <Container>
        <HomeContainer>
        <LeftSide>
          <SubHeader>Hi i'm William</SubHeader>
          <Header>frontend-end developer</Header>
          <HeaderText>
            I am a frontend developer based in Oslo. <HeaderTextSpan>Read more</HeaderTextSpan>
          </HeaderText>
          <HeroButton>
            <Link to='/about'>
            see more</Link>
          </HeroButton>
        </LeftSide>
        <RightSide>
          <Circle />
          <Image src={backgroundImage} alt="your-image" />
        </RightSide>
      </HomeContainer>
      </Container>
      <ProjectContainer>
        <Projects />
      </ProjectContainer>
    </>
  );
}

export default Home;
