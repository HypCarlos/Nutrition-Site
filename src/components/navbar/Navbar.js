import React from 'react'
import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className='navbar-pill'>
    <div className='navbar-buttons'>
            <li>
            <a href='/about'>
                About
            </a>
            </li>
            <li>
            <a href='/work'>
                Work
                </a>
            </li>
            
            <li>
            <a href='/blog'>
                Blog
                </a>
            </li>
            <li>
            <a href='/contact'>
                Contact
                </a>
            </li>
       
    </div>
    </div>
    </div>
  )
}

export default Navbar
