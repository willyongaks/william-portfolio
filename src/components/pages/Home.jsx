import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';



const Container = styled.nav`
  display: flex;
  background: purple;
  color: white;
  height: 100vh;
`
function Home() {
  return (

    <Container>
      <nav>
        <Link path='/'>Home</Link>
        <Link path='/about'>About</Link>
      </nav>
    </Container>
    
  )
}

export default Home