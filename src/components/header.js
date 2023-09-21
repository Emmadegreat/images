import './styles/header.css'

import { Link, NavLink } from 'react-router-dom'

import React from 'react'
import spinner from './images/spinner.png'

const Header = () => {
    return (
        <>
            <header>
                <Link><img src={ spinner} alt="logo" className='logo'/></Link>
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/login">Logout</NavLink></li>
                </ul>
            </header>

        </>
    )
}

export default Header
