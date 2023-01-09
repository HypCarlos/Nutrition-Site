import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';


const App = () => {
  return (
  <Routes>
    <Route  path='/' element={<Homepage/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route path='/work' element = {<Work/>}/>
    <Route path='/blog' element = {<Blog/>}/>
    <Route path='/contact' element = {<Contact/>}/>
  </Routes>
  )
}

export default App;
