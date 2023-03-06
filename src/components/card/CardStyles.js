import styled, { keyframes } from 'styled-components';

export const ProjectContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const ProjectSection = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: var();
`;

export const ProjectTitle = styled.h1`
  font-size: var(--header-1);
  color: var(--text-color);
  
`;


export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  color: var(--text-color);

  p {
    background: var(--secondary-color2);
    padding: .45em 3pc;
    border-radius: 50px;
    animation: skills-carousel 10s linear infinite;
  }

  @keyframes skills-carousel {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-25%);
    }
    50% {
      transform: translateX(-50%);
    }
     75% {
      transform: translateX(-75%);
    }
    100% {
      transform: translateX(0%);
    }

  
`;
export const TabContent = styled.div`
    margin: 1.5em 0px;
    column-gap: 1.5em;

    @media only screen and (min-width: 1024px) {
        column-count: 2;
    }
`; 

export const ProjectItemImage = styled.div`
  display: block;
  width: 100%;
  min-height: 80px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProjectItemImageImg = styled.img`
  width: 100%;
`;

export const ProjectItemDetails = styled.div`
  background-color: rgba(136, 136, 136, .05);
  padding: 1em;
`;

export const ProjectItemTitle = styled.h3`
  font-size: 1.3em;
  color: var(--text-color);
`;

export const CategoryHolder = styled.div`
  .category a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.534);
  }

  .category {
    font-size: .94em;
    font-weight: var(--font-weight-medium);
  }
`;
