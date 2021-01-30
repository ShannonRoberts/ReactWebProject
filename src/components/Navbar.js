import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
//import {HiMenu} from 'react-icons/hi';
import { HiMenuAlt3 } from "react-icons/hi";
//import logo from "../images/spl.PNG";

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: 0.3s ease-in-out;
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  font-size: 20px;
  flex: 1;
  margin-left: 20px;
`;

const LogoImg = styled.h3`
  // height: 55px;
  //border-radius: 10px;
  //margin-left: 20px;
  //&:hover {
  //transform: scale(1.02);
  //}
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

const MenuBars = styled(HiMenuAlt3)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle, home }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let isMounted = true;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 200;
      if ( isMounted && scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    }); 
    return () => { isMounted = false}
  });

  return (
    <Nav
      css={
        scroll || !home
          ? `background: #0FC7D6;`
          : ``
      }
    >
      <Logo to="/">
        <LogoImg>Creative</LogoImg>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          to="/contact"
          primary="true"
          css={`
            margin-left: 70px;
          `}
        >
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
