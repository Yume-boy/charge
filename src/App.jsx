import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/components/About';
import Career from '../src/components/Careers';
import Roles from '../src/components/Roles';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Layout from './components/Layout';


import './App.css'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/Roles' element={<Roles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
