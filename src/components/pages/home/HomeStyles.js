import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(60vh);
  
`;

export const MainContent = styled.section`
  display: block;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const MainContentRow = styled.div`
    display: flext;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: -15px;
    margin-left: -15px;
`;
export const MainContentColumn = styled.div`
    position: relative;
    width: 100vw;
    padding-left: 15px;
    padding-right: 15px;

    @media(min-width: 768px){
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
`;

export const Header = styled.h1`
    font-size: calc(var(--Large-font) + 9px);
    margin-bottom: 1rem;
    color: var(--text-color);

    @media screen and (max-width: 768px) {
        font-size: calc(var(--Large-font) + 6px);
    }
    @media screen and (max-width: 480px) {
        font-size: calc(var(--Large-font) + 3px);
    }
`;

export const SubHeader = styled.div`
  font-size: var(--Medium-font);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--text-color);

`;

export const HeaderText = styled.p`
  color: var(--text-color);
`;
export const HeroButton = styled.a`
  display: inline-block;
  width: 30%;
  padding: 12px;
  background: transparent;
  border: 1px solid var(--secondary-color);
  text-decoration: none;
  color: var(--secondary-color);
  text-align: center;

  &:hover{
      color: var(--primary-color);
      background-color: var(--secondary-color);
  }
`;