import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../images/logo.png';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import './Navbar.css';

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [activeLink, setActiveLink] = useState('main'); 
  const handleLinkClick = (target) => {
    setActiveLink(target);
    setIsNavShowing(false); 
  };

  return (
    <div>
      <nav>
        <div className="container nav__container">
          <Link
            to="main"
            className={`logo ${activeLink === 'main' ? 'active' : ''}`}
            onClick={() => handleLinkClick('main')}
          >
            <img src={Logo} alt="logo img" />
          </Link>

          <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            <li>
              <Link
  to="main"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('main')}
  >
  Home
</Link>
</li>
<li>
<Link
  to="pgm"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('pgm')}
 
>
  Programs
</Link>
</li>
<li>
<Link
  to="plans"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('plans')}
 
>
  Plans
</Link>
</li>

<li>
<Link
  to="rev"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('rev')}
 
>
  Reviews
</Link>
</li>       

<li>
<Link
  to="trainers"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('trainers')}
 
>
  About
</Link>
</li>   


<li>
<Link
  to="photos"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('photos')}
 
>
  Gallery
</Link>
</li>   

<li>
<Link
  to="faq"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('faq')}
 
>
  FAQs
</Link>
</li>   
<li>
<Link
  to="con"
  className={({ isActive }) => (isActive ? 'active-nav' : '')}
  smooth={true}
  duration={700}
  offset={-70}
  onClick={() => handleLinkClick('con')}
 
>
  Contact
</Link>
</li>   



          </ul>

          <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <MdOutlineClose /> : <BiMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
