import styled from 'styled-components';

export const ProjectSection = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: var(--main-bckgnd-color);
`;

export const ProjectTitle = styled.h1`
  font-size: var(--header-1);
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;

  p {
    background: var(--secondary-color2);
    padding: .45em 3pc;
    border-radius: 50px;
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

export const ContactOngaki = styled.div`
  width: 100vw;
  min-height:100vh;
  color: var(--main-bckgnd-color);
  text-align: center;
  padding-top: 2em;
  background: var(--secondary-color);
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContactHeading = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ContactTitle = styled.h1`
  font-size: 2em;
  width: 100%;
  color: var(--secondary-color2);
`;

export const ContactSubTitle = styled.div`
  width: 80%;
  margin: 0 auto;
  letter-spacing: 0.02em;
  font-size: 1em;
  line-height: 1.3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

