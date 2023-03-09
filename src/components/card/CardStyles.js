import styled from 'styled-components';

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 1fr);
  row-gap: 2rem;
  align-items: stretch;
  padding: 4rem 0 3rem 0;

  @media (min-width: 590px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media (min-width: 990px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
  }
`;

export const GridCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 0.5rem 0.5rem;
  border: 1px solid var(--text-color);
  box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 14%), 0 0.2rem 0.1rem rgb(0 0 0 / 12%), 0 0.1rem 0.3rem rgb(0 0 0 / 20%);
`;
export const GridCardImageContainer = styled.div`
  width: auto;
`;

export const GridCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
`;
export const GridCardText = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  font-size: 1.5rem;
  flex: auto;
`;

export const CardTextTitle = styled.h3`
  font-size: var(--medium-font);
  padding-bottom: 1rem;
  color: var(--text-color);
`;
export const CardTextParagraph = styled.p`
  font-size: calc(var(--extra-small-font) + 1px);
  color: white;

  p{
    
  }
`;
export const CardLinks = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  background: #ededed;
`;

export const CardLinksItems = styled.a`
  font-size: calc(var(--extra-small-font) + 1px);
  font-family: var(--main-font);
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;
  color: var(--primary-color);

  &:hover{
    color: var(--secondary-color);
  }
`;

