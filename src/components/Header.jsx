import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
          <div className="logo">Logo</div>
          <nav>
              <ul>
                  <Link to="/">Home</Link>
                  <Link to="/safaris">Safaris</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
              </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header