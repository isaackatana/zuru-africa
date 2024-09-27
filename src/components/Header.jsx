import React from 'react'
import { FaBars, FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header1">
        <div className="social-links">
          <a href="http://facebook.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
          <a href="http://instagram.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          <a href="http://x.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        </div>
        <div className="contact-links">
          <div><FaPhone/>+254  700 000000</div>
          <div><FaEnvelope/> info@juelssafaris.com</div>
        </div>

      </div>
      <div className="header2">
        <div className="logo">Juels Safaris</div>
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/safaris">Safaris</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
        </nav>
        <div className="burger">
          <FaBars/>
        </div>
      </div>
    </header>
  )
}

export default Header