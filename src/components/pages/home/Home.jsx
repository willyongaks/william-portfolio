import React from 'react';
import { 
  HomeContainer,
  MainContent,
  MainContentRow,
  MainContentColumn,
  Header,
  SubHeader,
  HeaderText,
  HeroButton,
} from './HomeStyles';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';






function Home() {
  return (
    <>
      <HomeContainer>
        <MainContent>
          <Container>
            <MainContentRow>
              <MainContentColumn>
                <article>
                  <SubHeader>Hi</SubHeader>
                  <Header>
                    i'm William Ongaki
                  </Header>
                  <HeaderText>
                    I am a frontend developer based in Oslo
                  </HeaderText>
                </article>
                <HeroButton href='/about'>
                    see more
                </HeroButton>
              </MainContentColumn>
            </MainContentRow>
          </Container>
        </MainContent>
      </HomeContainer>
    </>
  );
}

export default Home;
