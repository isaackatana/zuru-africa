import React, { useState } from 'react'
import { FaBars, FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import AuthPopup from './AuthPopup';

function Header() {
  const [isAuthPopupOpen, setAuthPopupOpen] = useState(false);

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
        <Link to='/'><div className="logo">Juels Tours & Safaris</div></Link>
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <div className="has-submenu">
                  <NavLink to="/tours">Tours</NavLink>

                  <ul>
                    <Link to=''>Shimba Hills</Link>
                    <Link to=''>Tsavo</Link>
                    <Link to=''>Lamu</Link>
                  </ul>
                </div>
                <div className="has-submenu">
                  <NavLink to="/safaris">Safaris</NavLink>

                  <ul>
                    <Link to=''>Zanzibar</Link>
                    <Link to=''>Malindi</Link>
                    <Link to=''>Kilifi</Link>
                    <Link to=''>Diani</Link>
                  </ul>
                </div>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
            <div className="user-login">
              <button onClick={() => setAuthPopupOpen(true)}>Login / Register</button>
              {isAuthPopupOpen && <AuthPopup onClose={() => setAuthPopupOpen(false)} />} 
            </div>
        </nav>
        <div className="burger">
          <FaBars/>
        </div>
      </div>
    </header>
  )
}

export default Header