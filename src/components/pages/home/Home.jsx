import React from 'react';
import styled from 'styled-components';
import Projects from '../projects/Projects';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
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
  height: 100vh;
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

const ProjectContainer = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <>
      <HomeContainer className='container'>
        
      </HomeContainer>
    </>
  );
}

export default Home;
