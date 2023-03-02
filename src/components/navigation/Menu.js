import React from 'react'
import { Link } from 'react-router-dom';
// import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';





// const Logo = styled.div`
//   margin-top: 30px;
//   width: 70px;
//   height: 70px;
// `

function Menu() {

  return (

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt='logo'/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </Nav>
        </Container>
    </Navbar>
    
  )
}

export default Menu