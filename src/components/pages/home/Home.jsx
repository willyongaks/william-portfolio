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
  SlillsDisplay,
} from './HomeStyles';
import { Container } from 'react-bootstrap';
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";





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
                    I'm William Ongaki
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
                <SlillsDisplay>
                  <p>Over the years, I have acquired a range of skills in web development, including</p>
                  <span>
                    <p><IoLogoJavascript />Javascript</p>
                    <p> <IoLogoHtml5/> HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                  </span>
                  
                </SlillsDisplay>
                <HeroButton href='/projects'>
                    see more projects <BsArrowRight />
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
