import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion'
import BACKGROUND from "../../assets/images/kiwi.png";

const about = () => {
  return (
    <div>
    <div className='homepage-hero-container' style={{backgroundImage: `url(${BACKGROUND})`, backgroundRepeat: "no-repeat", width: "100%", backgroundSize: "cover",borderradius:"30px"}}>
    <Navbar/>
    <div className='hero-section' style={{
      height: "1000px"
      }}>
<div className='hero-left'>
<h1>About me.</h1>
</div>
<div className='hero-right'>
<motion.div id = "motion" initial={{ x: 500 }} animate={{ x: 0 }} exit={{ x: 100 }} transition={{ ease: "easeOut", duration: 1 }}>
<Spline scene="https://prod.spline.design/jt8zVfnClEswtApW/scene.splinecode" />



</motion.div>
</div>
    </div>
    </div>
    </div>
  )
}

export default about
