import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';


const App = () => {
  return (
  <Routes>
    <Route  path='/' element={<Homepage/>}/>
    <Route  path='/about' element={<About/>}/>
  </Routes>
  )
}

export default App;
