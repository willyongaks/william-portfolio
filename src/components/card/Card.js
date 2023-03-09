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
import shuzy from '../assets/shuzy.png';
import Rainydays from '../assets/Rainydays.png';
import gameset from '../assets/gameset.png';
import KenyaSafari from '../assets/kenyaSafari.png';
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
                     <CardTextParagraph>A social media app that allows uers to post images,comment,like and upload an avater and banner to their profile. This was my own idea from naming of the website to design.</CardTextParagraph>
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

         {/* card 2 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={shuzy} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>shuzy</CardTextTitle>
                     <CardTextParagraph>This is a project from school</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/william-ongaki-semester-project-2">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://glowing-alfajores-e68984.netlify.app/">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

         {/* Card 3 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={gameset} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Gameset</CardTextTitle>
                     <CardTextParagraph>This is a project from school</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/course-assignment-jsframework-ongaki">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://github.com/willyongaks/course-assignment-jsframework-ongaki">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

         {/* Card 4 */}
         <GridCard>
             <GridCardImageContainer>
                 <GridCardImage src={Rainydays} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Rainydays</CardTextTitle>
                     <CardTextParagraph>This is a project from school</CardTextParagraph>
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
                     <CardTextTitle>Kenya safari</CardTextTitle>
                     <CardTextParagraph>This is a project from school</CardTextParagraph>
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
                 <GridCardImage src={gameset} alt="Soshols"/>
                 <GridCardText>
                     <CardTextTitle>Gameset</CardTextTitle>
                     <CardTextParagraph>This is a project from school</CardTextParagraph>
                 </GridCardText>
                 <CardLinks>
                     <CardLinksItems
                     href="https://github.com/willyongaks/course-assignment-jsframework-ongaki">
                     <AiFillGithub/>Repository</CardLinksItems>
                     <CardLinksItems
                     href="https://github.com/willyongaks/course-assignment-jsframework-ongaki">
                     <BiRightArrow/>Live</CardLinksItems>
                 </CardLinks>
             </GridCardImageContainer>
         </GridCard>

     </CardGridContainer>
    );
};

export default Card;
