import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { ServicesData } from "../data/ServicesData.js";

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
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

    @media screen and (max-width: 768px){
      margin-top:6rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }

  img {
    margin-bottom: 20px;
    
  }

  ul{
      padding: 0rem 0rem 2rem 2rem;
  }

  li{
      padding 0.5rem;
  }

  li > p{
      font-size: 15px;
      font-weight: 300;
      margin-bottom:2px;
  }
`;
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px){
        order: ${({ reverse }) => (reverse ? "2" : "1")};
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        padding-bottom: 5rem;
        font-size: 2rem;
        padding-top: 140px;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        margin-top: 2rem;

        @media screen and (max-width:768px){
            width:90%
            height: 90%
        }

       
    }
`;

const Logo = styled.img`
  width: 25rem;
  height: 12.5rem;
  

  @media screen and (max-width: 768px){
    width: 15rem;
    height: 8rem;

  }
`;





const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  logo,
  services,
  path
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          {logo ? <Logo src={logo} alt="logo" /> : null}
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          
          {services ? (
            <ul>
              {ServicesData.map((item, index) => (
                <li key={index}>{item.title} <p>{item.shortDesc}</p></li>
              ))}
            </ul>
          ) : <p>{paragraphTwo}</p>}

          <Button to={path} primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight
          reverse={reverse}
          data-aos={reverse ? "fade-right" : "fade-left"}
        >
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
