import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Image from '../images/himg.png';
import FooterImage from '../images/foot.png';
import './Header.css';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className="page-container">
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>WORK.SWEAT.ACHIEVE</h1>
          <p>We believe that fitness should be enjoyable and accessible to everyone. 
            We provide an environment where you can feel comfortable pushing your limits and reaching new heights.</p>
          <Link to="/plans" className='btn lg'> Get Started </Link>
          <div className="count-section">
              <div className="count-container">
                <span className="count-number">5000+</span>
                <span className="count-label">CLIENTS</span>
              </div>
              <div className="count-container">
                <span className="count-number">50+</span>
                <span className="count-label">TRAINERS</span>
              </div>
            </div>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="head_img" />
          </div>
        </div>
      </div>
     
    </header>
    <footer className="footer">
        <img src={FooterImage} alt="foot_img" />
      </footer>
    </div>    
    </div>
  )
}

export default Header