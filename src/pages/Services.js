import React, {useState} from 'react'
import Dropdown from '../components/Dropdown'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { InfoDataServiceFour, InfoDataServiceOne, InfoDataServiceThree, InfoDataServiceTwo } from '../data/InfoData'

const Services = () => {

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
        @media screen and (max-width: 768px){
          font-size:2rem;
          margin-bottom:3rem;
        }
        `;

    return (
        <div>

            <Navbar toggle={toggle} home={false}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Title>Services</Title>
            <InfoSection {...InfoDataServiceOne}/>
            <InfoSection {...InfoDataServiceTwo}/>
            <InfoSection {...InfoDataServiceThree}/>
            <InfoSection {...InfoDataServiceFour}/>
            <br/>
            <br/>
        </div>
    )
}

export default Services
