import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='fixed-top'>
      <div className='d-flex justify-content-between nav px-5'>
        <div className='logo'>logo</div>
        <div className='d-flex top'>
        <div className='links d-flex justify-content-between px-2'>
            <Link to='/About'>About Us</Link>
            <Link to='/Career'>How It Works</Link>
            <Link to='/About'>FAQs</Link>
        </div>
        <div className='links-2 d-flex justify-content-between px-2'>
        <Link to='/About'>About Us</Link>
        <Link to='/About'>About Us</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
