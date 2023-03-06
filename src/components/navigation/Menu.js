import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavContainer,
  Logo,
  LogoSpan,
  NavLinks,
  NavLinkStyled,
  Humberger,
  HumbergerIcon,
  MobileMenu,
  MobileNavLinkStyled,
} from './MenuStyles';



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