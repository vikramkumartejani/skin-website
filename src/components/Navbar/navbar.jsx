import React from 'react'
import Logo from '../../Images/logo.webp'
import './navbar.css'
import {IoMdNotificationsOutline} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src={Logo} className='navbar-logo' />
        <div className='right-content'>
            <h5>Sunday, 20 August</h5>
            <h5>1:50 PM</h5>
            <span className='icon'><IoMdNotificationsOutline/></span>
        </div>
    </div>
  )
}

export default Navbar