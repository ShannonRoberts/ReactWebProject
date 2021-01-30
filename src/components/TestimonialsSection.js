import React from "react";
import styled from "styled-components/macro";
import { TestimonialsData } from "../data/TestimonialData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
  font-size: 2rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Testimonial = styled.div`
  height:100%;
  margin-left: 0.5rem;
  margin-right 0.5rem;
  background: #055BE3;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  border-radius: 10px;
  color: #fff;
  padding: 2rem 3rem;
  background: linear-gradient(0deg, #0446B0 0%, #055BE3 50%, #0FC7D6 100%);
  opacity:0.9
`;

const TContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-text: center;
  text-align: center;
  width: 100%;
  height: 100%;


  h3 {
    font-size: clamp(1rem, 8vw, 1.5rem);
    font-weight: 400;

    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

    margin-bottom: 0.8rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    align-items: center;
    text-align: center;
  }

  h4 {
    margin-top: 1rem;
  }

`;



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1500, min: 800 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  },
};

const TestimonialsSection = (title, client, desc) => {
  return (
    <Section>
      <Title>Hear what our clients say about us!</Title>

      <Carousel
        draggable
        swipeable
        infinite
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
        containerClass={Container}
        
      >
        {TestimonialsData.map((item, index) => (
          <Testimonial key={index}>
            <TContent>
              <h3>{item.title}</h3>
              <p css={item.long ? 'font-size:small': ''}>{item.desc}</p>
              <h4>{item.client}</h4>
            </TContent>
          </Testimonial>
        ))}
      </Carousel>
    </Section>
  );
};

export default TestimonialsSection;
