import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {   
    return (
        <div className='sidebar-container'>
            <div className='sidebar-links'>
                <Link to='/overview'>Overview</Link>
                <Link to='/profile' >Profile</Link>
                <Link to='/profile' >Appointments</Link>
                <Link to='/profile' >History</Link>
                <Link to='/profile' >Messages</Link>
                <Link to='/profile' >Support</Link>
                <Link to='/profile' >Altercare</Link>
                <Link to='/profile' >Finances</Link>
                <Link to='/profile' >Virtual Consultation</Link>
            </div>
        </div>
    )
}

export default Sidebar