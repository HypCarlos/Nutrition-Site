import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../../components/navbar/Navbar';
import BACKGROUND from "../../assets/images/hello.jpg";
import '../homepage/homepage.css';
import { motion, AnimatePresence } from 'framer-motion'



const Homepage = () => {
  return (
    <div className='homepage' style={{margin: "0", padding: "0"}}>
    <div className='homepage-hero-container' style={{backgroundImage: `url(${BACKGROUND})`, backgroundRepeat: "no-repeat", width: "100%", backgroundSize: "cover"}}>
    <div className='navbar'>
    <Navbar/>
    </div>
    <div className='hero-section' style={{
      height: "1000px"
      }}>
<div className='hero-left'>
<h1>Hello its Andrea.</h1>
</div>
<div className='hero-right'>
<motion.div id = "motion" style = {{height: "100%"}} initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 100 }} transition={{ ease: "easeOut", duration: 1 }}>
<Spline id= "spline" scene="https://prod.spline.design/h3aI4HJw7CBuknvI/scene.splinecode" />
</motion.div>
</div>
  

    </div>
   
    </div>
    <div className='about-section'>
      <h1>Become the best you.</h1>
    </div>
    </div>
  )
}

export default Homepage


