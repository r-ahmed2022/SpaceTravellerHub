import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
         <div className="logo">
            <h1 className="app-title">Space Traveller Hub</h1>
            <img src="src/assets/planet.png" alt="space pic"/>
         </div>
         <ul className="navlinks">
            <li><NavLink to="/" className="link">Rocket</NavLink></li>
            <li><NavLink  to="/mission" className="link">Mission</NavLink></li>
            <li><NavLink to="/profile" className="link">Profile</NavLink></li>

         </ul>
    </nav>
  )
}
