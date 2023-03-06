import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

// STYLED COMPONENTS

const NavContainer = styled.nav`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  color: #fff;
  min-height: 0px;
  padding-top: 2rem;
  
  transition: all 0.5s ease 0s;
`;

const Logo = styled.p`
  font-family: var(--logo-font-w);
  font-size: var( --medium-font);

  a{
    text-decoration: none;
    color: var(--text-color); 
  }
`;
const LogoSpan = styled.span`
  color: var(--secondary-color);
`;

const NavLinks = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Humberger = styled.div`
  display: none;
  cursor: pointer;
  width: 32px; // can be overwritten by button css
  height: 32px; // can be overwritten by button css
  position: relative;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const HumbergerIcon = styled.span`
  display:block;
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  margin: 5px;
  transition: transform 0.2s ease-out;
  transform: translate(-50%, -50%);

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity:${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  background-color: #333;
  color: var(--text-color);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const MobileNavLinkStyled = styled(NavLink)`
  color: var(--text-color);
  text-decoration: none;
  padding: 1rem;
  transition: background-color 0.2 ease-out;

  &:hover{
    background-color: #555;
  }

  &.active {
    color: var(--secondary-color);
    background-color: #555;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--text-color);
  margin-left: 1rem;
  text-decoration: none;
  padding:8px 8px;

  &.active {
    color: var(--secondary-color);
    padding:8px 8px;
    position: relative;
    
    &::before {
      width: 100%;
    }
  }
  &:hover {
    color: var(--secondary-color);
   
    &::before {
      width: 100%;
    } 
  }

  &::before{
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.2s ease-out;
  }

`;


function Menu() {
  const [open, setOpen] = useState(false);

  const handleHumbergerClick = () => {
    setOpen(!open)
  }

  return(
    <NavContainer className='container'>
        <Logo>
          <Link to='/'>
            wo <LogoSpan>.</LogoSpan>
          </Link>
          
        </Logo>
      <NavLinks>
        <NavLinkStyled exact='true' to='/'>Home</NavLinkStyled>
        <NavLinkStyled exact='true' to='/projects'>Projects</NavLinkStyled>
        <NavLinkStyled to='/about' >About</NavLinkStyled>
        <NavLinkStyled to='/contact'>Contact</NavLinkStyled>
      </NavLinks>
      <Humberger onClick={handleHumbergerClick}>
        <HumbergerIcon open={open} />
        <HumbergerIcon open={open} />
        <HumbergerIcon open={open} />
      </Humberger>
      <MobileMenu open={open}>
        <MobileNavLinkStyled exact='true' to='/' onClick={handleHumbergerClick}>
          Home
        </MobileNavLinkStyled>
        <MobileNavLinkStyled exact='true' to='/projects' onClick={handleHumbergerClick}>
          Projects
        </MobileNavLinkStyled>
        <MobileNavLinkStyled exact='true' to='/about'onClick={handleHumbergerClick}>
          About
        </MobileNavLinkStyled>
        <MobileNavLinkStyled exact='true' to='/contact' onClick={handleHumbergerClick}>
          Contact
        </MobileNavLinkStyled>
      </MobileMenu>
    </NavContainer>
  )
}

export default Menu;