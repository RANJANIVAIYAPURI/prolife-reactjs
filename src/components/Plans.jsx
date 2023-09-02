import { Link } from 'react-router-dom';
import './Programs.css';
import { FaRupeeSign } from 'react-icons/fa';
import './Plans.css'
function Plans() {
  return (
    <div id='plans'>
        <section className="Price">
      <div className="container price__container">
        <div className="price__head">
          <h1>PICK A PLAN</h1>
          <h6>Start your journey with us today</h6>
        </div>
        <div className="row">
          <div className="card-title">
            <h5>Package</h5>
            <h2>MONTHLY</h2>
            <div className="card-price">
              <FaRupeeSign />
              <span className="card-amount">1999</span>/-
            </div>
            <p>Lorem ipsum dolor sit amet,incididunt ut labore et dolore magna aliqua.Ut enim 
              ad minim veniam, ullamco laboris nisi ut aliquip ex Duis aute 
              irure dolor Excepteur sint occaecat cupidatat </p>
            <Link to="/plans" className='btn2 lg2'> Enroll now </Link>
          </div>
          <div className="card-title">
            <h5>Package</h5>
            <h2>ANNUAL</h2>
            <div className="card-price">
              <FaRupeeSign />
              <span className="card-amount">8999</span>/-
            </div>
            <p>Lorem ipsum dolor sit amet,incididunt ut labore et dolore magna aliqua.Ut enim 
              ad minim veniam, ullamco laboris nisi ut aliquip ex Duis aute 
              irure dolor Excepteur sint occaecat cupidatat </p>
            <Link to="/plans" className='btn2 lg2'> Enroll now </Link>
          </div>
                    <div className="card-title">
            <h5>Package</h5>
            <h2>CORPORATE</h2>
            <div className="card-price">
              <FaRupeeSign />
              <span className="card-amount">6999</span>/-
            </div>
            <p>Lorem ipsum dolor sit amet,incididunt ut labore et dolore magna aliqua.Ut enim 
              ad minim veniam, ullamco laboris nisi ut aliquip ex Duis aute 
              irure dolor Excepteur sint occaecat cupidatat </p>
            <Link to="/plans" className='btn2 lg2'> Enroll now </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Plans