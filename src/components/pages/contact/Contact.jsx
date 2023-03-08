import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { 
  MainContent,
  ContactHeading,
  ArticleText,
  FormContainer,
  FormFields,
  FormInput,
  FormTextarea,
  SendButton,
} from './ContactStyles';

function Contact() {
  return (
    <MainContent>
      <Container>
        <Row>
          <Col>
          <ContactHeading>Contact</ContactHeading>
          <article>
            <ArticleText>
              Get in touch or send me an email at 
              <b>william.ongaki10@gmail.com</b>
            </ArticleText>
          </article>
          <FormContainer>
            <FormFields>
              <FormInput 
                type="text"
                name="name"
                placeholder=" Name"
                className='FromControl'
              />
              <FormInput 
                type="email"
                name="email"
                placeholder=" Email"
                className='FromControl'
              />
              <FormTextarea 
                name="message"
                placeholder=" Message"
                aria-required="true"
                rows={5}
                required

              />
            </FormFields>
          </FormContainer>
          <SendButton> Send message</SendButton>
          </Col>
        </Row>
      </Container>
    </MainContent>
  )
}

export default Contact
