import React,{useState} from 'react'
import Dropdown from '../components/Dropdown';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import {ImagesData} from '../data/ImageData';

const Portfolio = () => {
    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar toggle={toggle} home={false}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Gallery images={ImagesData}/>
        </div>
    )
}

export default Portfolio
