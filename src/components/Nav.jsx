import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo_con-removebg-preview (1).png'

const Nav = () => {
  return (
    <div className='fixed-top'>
      <div className='d-flex justify-content-between nav px-5 container py-4'>
        <div className='logo'><img src={logo} alt="" /></div>
        <div className='d-flex top'>
        <div className='links d-flex justify-content-between px-2'>
            <Link to='/' className='text-reset text-decoration-none pt-2'>About Us</Link>
            <Link to=''  className='text-reset  text-decoration-none  pt-2'>How It Works</Link>
            <Link to=''  className='text-reset  text-decoration-none  pt-2'>FAQs</Link>
            <Link to=''  className='text-reset  text-decoration-none  pt-2'>EN</Link>
            <div className='app'><Link to='/About'  className='text-reset  text-decoration-none'>Acess App</Link></div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Nav
