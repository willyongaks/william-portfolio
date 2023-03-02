import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';





const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--secondary-color);
`;













function Menu() {

  return (

    <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo src={logo} alt='logo'/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLinkStyled to="/" className='nav-link'>Home</NavLinkStyled>
            <NavLinkStyled to="/about" className='nav-link'>About</NavLinkStyled>
            <NavLinkStyled to="/contact" className='nav-link'>Contact</NavLinkStyled>
          </Nav>
        </Container>
    </Navbar>
    
  )
}

export default Menu