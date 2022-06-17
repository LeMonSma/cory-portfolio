import React from 'react';
import './Sidebar.css'
import logo from '../../assets/images/logo/logo2.jpg'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <img className='logo' src={logo} alt='logo' />

        </div>

    )
}

export default Sidebar