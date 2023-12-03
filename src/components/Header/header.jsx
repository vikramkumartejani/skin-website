import React from 'react'
import './header.css'
import Logo from '../../Images/logo.webp'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='img-container'>
                <img src={Logo} alt='logo' />
            </div>
        </div>
    )
}

export default Header