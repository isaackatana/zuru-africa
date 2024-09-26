import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <footer>
      <p>Copyright © 2024 Juels Safaris. All Rights Reserved. </p>
      <div className="social-links">
        <a href="http://facebook.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
        <a href="http://instagram.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        <a href="http://x.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
      </div>
    </footer>
    </>
  )
}

export default Footer