import styled from 'styled-components';

export const ProjectSection = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: var();
  padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const ProjectTitle = styled.h1`
  font-size: var(--header-1);
  color: var(--text-color);
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;
  color: var(--text-color);

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
