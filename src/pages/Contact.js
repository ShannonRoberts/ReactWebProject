import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Image8 from '../images/port3.jpg';
import Image9 from '../images/port4.jpg';
import logo from '../images/logorocket.png';
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const Title = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    font-size: 2rem;
    padding-top: 120px;
    font-size: 3.5rem;
    font-weight: 700;
    color: #1e2121;
    @media screen and (max-width: 768px){
      font-size:2rem;

    }
  `;

  const Logo = styled.img`
  width: 25rem;
  height: 12.5rem;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2.5rem;
    @media screen and (max-width: 768px){
      width: 15rem;
      height: 8rem;
  
    }
`;

  const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem, 0rem;
  `;
  const Container = styled.div`
    padding: 3rem calc((100vw-1300px) /2);
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;
  const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;;
  order: 1;
    padding:2rem;
  
`;
  const ColumnRight = styled.div`
    padding: 2rem;
    order: 2;
    display:grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px){
        order: 1;
    }

    img{
        width: 100%;
        height: 78%;
        object-fit:cover;
        margin-top: 2rem;
        

        @media screen and (max-width:768px){
            width:90%
            height: 90%
        }

       
    }
`;

const Para = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  
  font-size: 2rem;
  font-weight: 300;
  color: #1e2121;
  @media screen and (max-width: 768px){
    font-size:1rem;

  }
`;

  return (
    <Section>
      <Navbar toggle={toggle} home={false} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Title>Contact Us</Title>
      <Para>We'd loved to hear from you!</Para>
      <Para>We will get back to you within a day</Para>
      <Logo src={logo} alt='image'/>
      <Container>
        <ColumnLeft><ContactForm></ContactForm></ColumnLeft>
        <ColumnRight>
          <img src={Image8} alt='contact'/> <img src={Image9} alt='contact2'/>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Contact;
