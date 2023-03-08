import styled, { keyframes } from 'styled-components';

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
    font-family: 'Rampart One', cursive;
    margin-bottom: 1rem;
    color: var(--text-color);

    @media screen and (max-width: 768px) {
        font-size: calc(var(--Large-font) + 3px);
    }
    @media screen and (max-width: 480px) {
        font-size: calc(var(--Large-font) - 6px);
    }
    

    &::before{
        content: '<h1>';
        align-self: flex-end;
        font-size: 12px;
        font-family: var(--main-font);

        @media (min-width: 942px) {
            padding: 2.1rem 1rem 0 0;
        }
    }
    &::after{
        content: '<h1>';
        font-size: 12px;
        left: -2px;
        font-family: var(--main-font);

        @media (min-width: 942px) {
            padding: 0 0 1.8rem 1rem;
        }
    }
`;

export const Block = styled.span`
    width: 0%;
    height: inherit;
    background: #ffb510;
    position: absolute;
    animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
    display: flex;
`;

export const SubHeader = styled.div`
  font-size: var(--Medium-font);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--text-color);


  &::before{
        content: '<p>';
        align-self: flex-end;
        font-size: 12px;

        @media (min-width: 942px) {
            padding: 2.1rem 1rem 0 0;
        }
    }
    &::after{
        content: '<p>';
        font-size: 12px;

        @media (min-width: 942px) {
            padding: 0 0 1.8rem 1rem;
        }
    }

`;

export const HeaderText = styled.p`
  color: var(--text-color);

  &::before{
        content: '<p>';
        align-self: flex-end;
        font-size: 12px;

        @media (min-width: 942px) {
            padding: 2.1rem 1rem 0 0;
        }
    }
    &::after{
        content: '<p>';
        font-size: 12px;

        @media (min-width: 942px) {
            padding: 0 0 1.8rem 1rem;
        }
    }
`;

export const SlillsDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    p{
        color: var(--text-color);     
    }
    span{
        display: flex;
        justify-content: center;
        gap:1em;
        
        p{
            background-color: var(--blured-secondary-color);
            color: var(--blured-text-color);
            padding: 0px 5px; 

        }
        
    }

`;

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
`;
export const HeroButton = styled.a`
  display: inline-block;
  padding: 12px;
  background: transparent;
  border: none;
  text-decoration: none;
  color: var(--secondary-color);
  text-align: center;

  &:hover{
      color: var(--primary-color);
      background-color: var(--secondary-color);
  }

  svg {
    margin-left: 1rem;
    animation: ${move} 0.5s alternate infinite;
  }
`;