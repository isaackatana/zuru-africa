import React, { useState } from 'react'
import { FaBars, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import AuthPopup from './AuthPopup';

function Header() {
  const [isAuthPopupOpen, setAuthPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle successful login
  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setAuthPopupOpen(false); // Close the modal
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

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
          <div><FaEnvelope/> info@zuruafricasafaris.com</div>
        </div>
      </div>
      <div className="header2">    
        <Link to='/'><div className="logo">ZATS</div></Link>
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
              {isLoggedIn ? (
                
                <div className="has-submenu profile">
                  <button onClick={handleLogout}>Logout</button>
                  <Link to=''><span className="profile-icon"><FaUser/></span></Link>

                  <ul>
                    <Link to=''>Zanzibar</Link>
                    <Link to=''>Malindi</Link>
                    <Link to=''>Kilifi</Link>
                    <Link to=''>Diani</Link>
                  </ul>
                </div>
              ) : (
                <button onClick={() => setAuthPopupOpen(true)}>Login</button>
              )}
              {isAuthPopupOpen && <AuthPopup onClose={() => setAuthPopupOpen(false)} onLoginSuccess={handleLoginSuccess} />}
            </div>
            <div className="burger">
              <FaBars/>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header