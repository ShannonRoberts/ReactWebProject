import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem, 0rem;
`;
const Container = styled.div`
    padding: 3rem calc((100vw-1300px) /2);
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows 400px;
    grid-row-gap: 50px;
    grid-column-gap: 20px;
    margin:2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
  font-size: 2rem;
  padding-top: 140px;
  font-size: 3.5rem;
  font-weight:700
  color:#1E2121;
`;

const GalleryItem = styled.div`
    
    height:400px;
    width: 400px;
    margin-right:10rem;
    margin:1rem;

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: 0.3s;
        animation-name: enlarge;
        animation-duration: 2s;
        @keyframes enlarge {
          0% {  transform:scale(1.05) }
          100% { 100% transform:scale(1.0)}
          
        }
      }
      img{
        height:400px;
        width: 400px;
      }
      h3{
          text-align: center;
      }
    
`;

const options = {
  settings: {
    overlayColor: "#02307A",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#191A19",
    iconColor: "#0FC7D6",
  },
  caption: {
    captionColor: "#0FC7D6",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

const Gallery = ({ images }) => {
  return (
    <>
      <Section>
        <Title>Portfolio</Title>

        <SRLWrapper options={options}>
          <Container>
            {images.map((slide, index) => {
              return (
                <GalleryItem key={index}>
                  <img src={slide.src} alt={slide.caption} />
                  <h3>{slide.title}</h3>
                </GalleryItem>
              );
            })}
          </Container>
        </SRLWrapper>
      </Section>
    </>
  );
};

export default Gallery;
