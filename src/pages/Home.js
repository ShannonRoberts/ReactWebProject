import React, {useState} from 'react'
import Dropdown from '../components/Dropdown';
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Navbar from '../components/Navbar';
import TestimonialsSection from "../components/TestimonialsSection";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

  
  return (
    <>
    <Navbar toggle={toggle} home={"true"}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <TestimonialsSection />
    </>
  );
};

export default Home;
