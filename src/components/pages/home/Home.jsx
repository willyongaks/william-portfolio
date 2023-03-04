import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImage.png';
import Projects from '../projects/Projects';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding-left: 5rem;
  padding-right: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;


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
`;

const Header = styled.h1`
  font-size: var(--Large-font);
  margin-bottom: 1rem;
  color: var(--text-color);
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

const RightSide = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const Circle = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(var(--secondary-color), var(--primary-color));
  opacity: 1;
  z-index: 0;

   @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ProjectContainer = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <>
      <HomeContainer>
        <LeftSide>
          <SubHeader>Hi i'm William</SubHeader>
          <Header>frontend-end developer</Header>
          <HeaderText>
            I am a frontend developer based in Oslo. <HeaderTextSpan>Read more</HeaderTextSpan>
          </HeaderText>
        </LeftSide>
        <RightSide>
          <Circle />
          <Image src={backgroundImage} alt="your-image" />
        </RightSide>
      </HomeContainer>
      <ProjectContainer>
        <Projects />
      </ProjectContainer>
    </>
  );
}

export default Home;
