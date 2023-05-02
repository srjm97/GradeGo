import React from 'react'

import './footer.css'

const Footer = (props) => {
  const today= new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">GradeGo</span>
          <span>Copyright © {year}.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 Large">Quick Links</span>
            <span className="footer-text03 Large">Login</span>
            <span className="footer-text04 Large">Features</span>
            <span className="footer-text04 Large">Contact Us</span>
            <span className="footer-text05 Large">About Us</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
