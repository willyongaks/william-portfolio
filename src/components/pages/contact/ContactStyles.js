import styled from 'styled-components';

export const ContactOngaki = styled.div`
  width: 100vw;
  min-height:100vh;
  color: var(--main-bckgnd-color);
  text-align: center;
  padding-top: 2em;
  background: var(--secondary-color);
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContactHeading = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ContactTitle = styled.h1`
  font-size: 2em;
  width: 100%;
  color: var(--secondary-color2);
`;

export const ContactSubTitle = styled.div`
  width: 80%;
  margin: 0 auto;
  letter-spacing: 0.02em;
  font-size: 1em;
  line-height: 1.3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

