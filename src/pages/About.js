import React, {useState} from 'react'
import Dropdown from '../components/Dropdown';
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar';
import TestimonialsSection from '../components/TestimonialsSection';
import { InfoDataAbout } from '../data/InfoData'
import { TestimonialsData } from '../data/TestimonialData';
import styled from'styled-components'

const About = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

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
  
    return (
        <div>
            <Navbar toggle={toggle} home={false}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Title>About Us</Title>
            <InfoSection {...InfoDataAbout}/>
            <TestimonialsSection {...TestimonialsData}/>
        </div>
    )
}

export default About
