import React from 'react';
import { 
  HomeContainer,
  MainContent,
  MainContentContainer,
  MainContentRow,
  MainContentColumn,
  Header,
  SubHeader,
  HeaderText,
} from './HomeStyles';
import { Link } from 'react-router-dom';






function Home() {
  return (
    <>
      <HomeContainer>
        <MainContent>
          <MainContentContainer>
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
              </MainContentColumn>
            </MainContentRow>
          </MainContentContainer>
        </MainContent>
      </HomeContainer>
    </>
  );
}

export default Home;
