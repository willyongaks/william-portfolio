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
                    I am a frontend developer based in Oslo with a passion for creating user-friendly
                    experiences on the web. As a developer, I strive to not only meet but exceed user expectations
                    by creating visually appealing and intuitive interfaces that enhance the overall user experience.
                    Through my work, I aim to provide efficient and seamless digital experiences that engage and delight users.
                    I am constantly seeking to learn and grow in my field, and I am excited to bring my skills and enthusiasm to 
                    new projects and challenges.
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
