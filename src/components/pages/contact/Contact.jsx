import React, { useRef, useState} from 'react';
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
  Message,
  MessageLink,
} from './ContactStyles';
import { BsArrowRight } from "react-icons/bs";

function Contact() {
  const[formSubmited, setFormSubmited] = useState(false);
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67y8wu2', 'template_3kq9psp', form.current, 'U6by-e20Z0xIhjVwk')
      .then((result) => {
        setFormSubmited(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
    {formSubmited ? (
      <Message className='container'>
        Thank you for your message. We will get back to you as soon as possible
        <MessageLink to='/'>
          Go back home <BsArrowRight />
        </MessageLink>
      </Message>
    ) : (
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
                    <SendButton type='submit' value='send'> Send message <BsArrowRight /></SendButton>
                </FormContainer>
              </Col>
            </Row>
          </Container>
      </MainContent>
    )}
    </>
    
  )
}

export default Contact;
