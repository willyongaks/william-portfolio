import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

// STYLED COMPONENTS

export const NavContainer = styled.nav`
  display:flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 50px 0px;
  transition: all 0.5s ease 0s;

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

export const Logo = styled.p`
  font-family: var(--logo-font-w);
  font-size: var( --medium-font);

  a{
    text-decoration: none;
    color: var(--text-color); 
  }
`;
export const LogoSpan = styled.span`
  color: var(--secondary-color);
`;

export const NavLinks = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Humberger = styled.div`
  display: none;
  cursor: pointer;
  width: 32px; // can be overwritten by button css
  height: 32px; // can be overwritten by button css
  position: relative;
  z-index: 10000;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HumbergerIcon = styled.span`
  display:block;
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  margin: 5px;
  transition: transform 0.2s ease-out;
  transform: translate(-50%, -50%);
  z-index: 10000;

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

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  background-color: #333;
  color: var(--text-color);
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 1rem;
  z-index: 10000;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

export const MobileNavLinkStyled = styled(NavLink)`
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

export const NavLinkStyled = styled(NavLink)`
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