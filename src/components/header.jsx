import './styles/header.css'

import { Link, NavLink } from 'react-router-dom'

import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">Image-Gallery</Link>
                <ul>
                    <li><NavLink to="login">Login</NavLink></li>
                    <li><NavLink to="/home">Logout</NavLink></li>
                </ul>
            </header>

        </>
    )
}

export default Header
