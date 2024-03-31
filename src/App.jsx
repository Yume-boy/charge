import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/components/About';
import Career from '../src/components/Careers';
import Roles from '../src/components/Roles';
import Nav from './components/Nav';


import './App.css'

function App() {

  return (
    <div>
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<About />} />
            <Route path='/Career' element={<Career />} />
            <Route path='/Roles' element={<Roles />} />
            
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
