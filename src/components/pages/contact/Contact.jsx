import React, { useState } from 'react';
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
} from './ContactStyles';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    }

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      if (res.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      }else{
        setStatus('error')
      }
    })
    .catch((error) => {
      setStatus('error')
    })
  }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormInput 
                type="email"
                name="email"
                placeholder=" Email"
                className='FromControl'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormTextarea 
                name="message"
                placeholder=" Message"
                aria-required="true"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required

              />
            </FormFields>
          </FormContainer>
          {status === 'success' ? (
            <Message>Message sent successfully!</Message>
          ): status === 'error' ? (
            <Message>Message sent unsuccessfully, please try again later</Message>
          ): null}
          <SendButton
            type='submit'
            onClick={handleSubmit}
          > Send message</SendButton>
          </Col>
        </Row>
      </Container>
    </MainContent>
  )
}

export default Contact
