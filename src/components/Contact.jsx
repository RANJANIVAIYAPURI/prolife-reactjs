import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css'

function Contact() {
  return (
    <div id='con'>
         <section className="newsletter">
      <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>Subscribe to our newsletter</h3>
          <p>Be the first to know about new offers,<br /> events and much more.</p>
        </div>
        <div className="newsletter-input" style={{ margin: 0 }}>
          <div className="input-container">
            <input type="email" id="email" name="email" placeholder="Email Address" />
            <div className="arrow"><FaArrowRight/></div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <p>Follow us on</p>
        <div className="social-icons">
          <div className="icon"><FaFacebookF/></div>
          <div className="icon"><FaTwitter/></div>
          <div className="icon"><FaLinkedinIn/></div>
          <div className="icon"><FaInstagram/></div>
        </div>
      </div>
      </div>
    </section>
        
   </div>
  )
}

export default Contact