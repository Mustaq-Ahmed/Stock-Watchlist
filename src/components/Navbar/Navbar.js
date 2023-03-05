import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <header className='navbar'>
            <ul className='navlinks'>
                <li>
                    <NavLink to="/home">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist">WATCHLIST</NavLink>
                </li>
            </ul>
        </header>
    )
}
