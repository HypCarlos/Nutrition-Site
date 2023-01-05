import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../../components/navbar/Navbar';
import BACKGROUND from "../../assets/images/hello.jpg";
import '../homepage/homepage.css';


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
<Spline style= {{}}scene="https://prod.spline.design/FU95CMehFK4hxpfY/scene.splinecode" />
</div>
  

    </div>
    </div>
    </div>
  )
}

export default Homepage


