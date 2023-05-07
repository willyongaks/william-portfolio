import React from 'react';
import {
    CardGridContainer,
    GridCard,
    GridCardImageContainer,
    GridCardImage,
    GridCardText,
    CardTextTitle,
    CardTextParagraph,
    CardLinks,
    CardLinksItems,
} from './CardStyles';
import soshols from '../assets/soshols.png';
import Rainydays from '../assets/Rainydays.png';
import KenyaSafari from '../assets/kenyaSafari.png';
import SceienceMuseum from '../assets/museum.png';
import { AiFillGithub } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";

const Card = () => {
    return (
     <CardGridContainer>

         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={soshols} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Soshols</CardTextTitle>
                     <CardTextParagraph>For my school project, I conceptualized and developed a social media platform featuring image sharing, commenting, liking, and customizable profiles, from ideation to design.</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/social-media">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://frabjous-starburst-8fb180.netlify.app">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>


         {/* Card 2 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={Rainydays} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Rainydays</CardTextTitle>
                     <CardTextParagraph>My web application is an e-commerce platform that offers a diverse range of winter jackets. The site includes filtering options, user accounts, secure payment processing, and a personalized shopping experience.</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/rainydays-updated">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://nostalgic-hawking-af93b5.netlify.app/">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

         {/* card 5 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={KenyaSafari} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Kenya Safari</CardTextTitle>
                     <CardTextParagraph>My web blog application showcases my safari trip to Kenya, featuring photos, stories, and recommendations for future travelers. The app offers a personalized experience for users interested in African wildlife and culture.</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/kenyan-Safari_Blog">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://upbeat-kare-14d099.netlify.app/">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

         {/* card 6 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={SceienceMuseum} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Sceience Museum</CardTextTitle>
                     <CardTextParagraph>My web application provides a centralized platform for a community science museum. It showcases opening hours, events, and exhibits, along with interactive educational content for visitors to learn about the museum's offerings.</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/Science-Museum">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://focused-mahavira-f95546.netlify.app">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

     </CardGridContainer>
    );
};

export default Card;
