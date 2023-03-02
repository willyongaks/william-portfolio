import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImage.png';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding-left: 5rem;
  padding-right: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
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

const RightSide = styled.div`
  position: relative;
  overflow: hidden;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  opacity: 0.3;
  z-index: 0;
`;

function Home() {
  return (
    <HomeContainer>
      <LeftSide>
        <SubHeader>Hi i'm William</SubHeader>
        <Header>frontend-end developer</Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </LeftSide>
      <RightSide>
        <Circle />
        <Image src={backgroundImage} alt="your-image" />
      </RightSide>
    </HomeContainer>
  );
}

export default Home;
