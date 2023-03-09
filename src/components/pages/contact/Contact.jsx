import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
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
  // Message,
} from './ContactStyles';

function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67y8wu2', 'template_3kq9psp', form.current, 'U6by-e20Z0xIhjVwk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


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
          <FormContainer ref={form} onSubmit={sendEmail}>
            <FormFields>
              <FormInput 
                type="text"
                name="user_name"
                placeholder=" Name"
                className='FromControl'
                required
              />
              <FormInput 
                type="email"
                name="user_email"
                placeholder=" Email"
                className='FromControl'
                required
              />
              <FormTextarea 
                name="message"
                placeholder=" Message"
                aria-required="true"
                rows={5}
                required

              />
            </FormFields>
            <SendButton
            type='submit'
            value='send'
          > Send message</SendButton>
          </FormContainer>
          </Col>
        </Row>
      </Container>
    </MainContent>
  )
}

export default Contact;
