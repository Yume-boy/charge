import React from 'react'
import logo from '../components/images/logo_con-removebg-preview (1).png'
import logo1 from '../components/images/Mobile app store badge (1).png'
import logo2 from '../components/images/Mobile app store badge.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
    <div class="container  mt-5 ">
        <div class="row align-items-center">
            <div class="col-8">
            <div className='footer-logo'><img src={logo} alt="" /></div>
            <p>Mobile EV charge that has your back</p>
            <div className='w-75 d-flex justify-content-between'>
            <Link to='/About' className='text-reset text-decoration-none pt-2'>About Us</Link>
            <Link to='/Career'  className='text-reset  text-decoration-none  pt-2'>How It Works</Link>
            <Link to='/Career'  className='text-reset  text-decoration-none  pt-2'>Career</Link>
            <Link to=''  className='text-reset  text-decoration-none  pt-2'>Contact Us</Link>
            <Link to='/' className='text-reset text-decoration-none pt-2'>Pricing</Link>
            <Link to='/Roles'  className='text-reset  text-decoration-none  pt-2'>FAQs</Link>
            </div>
            </div>
            <div class="col-4 d-flex justify-content-end flex-column align-items-end">
            <p className='text-center'>Get the app</p>
            <div><img src={logo1} alt="" /></div>
            <div className='my-2'><img src={logo2} alt="" /></div>
            
            </div>
            
        </div>

            <div className='footer-charge'>
            <h3>CHARGE ME NOW</h3>
            </div>

            <div className='rule-1 mx-5 '></div>

            <div className='d-flex justify-content-between mt-3 copyright'>
                <p>© 2024 Charge Me Now. All rights reserved.</p>
                <div className='d-flex'>
                <p className='px-2'><FaTwitter /></p>
                <p className='px-2'><FaLinkedin /></p>
                <p className='px-2'><FaFacebook /></p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Footer
