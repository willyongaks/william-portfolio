import styled, { keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContent = styled.section`
  display: block;
`;


export const ContactHeading = styled.h1`
  font-size: var(--Large-font);
  font-weight: 900;
  margin: 4rem 0rem 1.5rem;
  position: relative;
  color: var(--text-color);
`;

export const ArticleText = styled.p`
  font-size: var(--extra-small-font);
  color: var(--text-color);
  margin-top: 0.6rem;
  line-height: 2;
  font-weight: 400;
`;

export const FormContainer = styled.form`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;


export const FormInput = styled.input`
  background: transparent;
  resize: none;
  color: var(--text-color) !important;
  box-shadow: none !important;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 24px 21px !important;
  border: 1px solid var(--secondary-color);
  border-radius: 0.25rem;
  box-shadow: none !important;
  outline: none;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
   
`;

export const FormTextarea = styled.textarea`
  box-shadow: none !important;
  padding: 24px 21px !important;
  background: transparent;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-color);
  resize: none;
  outline: none;
  border: 1px solid var(--secondary-color);
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
`;
export const Message = styled.p`
  padding: 10px;
  border-radius: 5px;
  width: 60%;
  color: var(--secondary-color);
`;

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px);
  }
`;
export const SendButton = styled.button`
  font-size: calc(var(--extra-small-font) + 1.1px);
  background-color: var(--secondary-color);
  border-radius: 5px;
  border: none;
  padding: 15px 40px;
  margin-bottom: 3rem;

  svg {
    margin-left: 1rem;
    animation: ${move} 0.5s alternate infinite;
  }
  
`;
export const MessageLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  padding-left: 1em;

  svg {
    margin-left: 1rem;
    animation: ${move} 0.5s alternate infinite;
  }
`;