import React, { Children } from 'react'
import Sidebar from '../SideBar/sidebar'
import Navbar from '../Navbar/navbar'
import './dashboard.css'

const Dashboard = ({ children }) => {
    return (
        <>
            <Navbar />
        <div  style={{ display: 'flex' }}>
            <div className='side-bar'>
                <Sidebar />
            </div>
            <div className='content'>
                <div>
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard