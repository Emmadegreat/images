import './styles/header.css'

import { Link, NavLink } from 'react-router-dom'

import React from 'react'
import icon from './images/icon.jpg'

const Header = () => {
    return (
        <>
            <header>
                <Link><img src={ icon } alt="logo" className='logo'/></Link>
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/login">Logout</NavLink></li>
                </ul>
            </header>

        </>
    )
}

export default Header
