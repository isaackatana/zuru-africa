import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="logo"></div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/safaris">Safaris</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header