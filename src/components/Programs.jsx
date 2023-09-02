import { Link } from 'react-router-dom';
import './Programs.css';
function Programs() {
  return (
    <div id='pgm'>
        <section className="Programs">
        <div className="container programs__container">
            <div className="programs__head">
                <h1>OUR PROGRAMS</h1>
                <h6>Every body is different. What do you want to start with?</h6>
            </div>
            <div className="row">
            <div className="Programs-col personal-training">
                <h2>Personal Training</h2>
                <p>Our certified trainers provide personalized training programs 
                    to help our members achieve their fitness goals. 
                    We offer one-on-one training sessions and group training sessions.</p>
                 
            <Link to="/plans" className='btn1 lg1'> Learn more </Link>
            </div>
            <div className="Programs-col diet-counselling">
                <h2>Diet Counselling</h2>
                <p>Our nutritionists provide personalized diet plans to help our members 
                    achieve their fitness goals. We offer one-on-one counselling sessions 
                    and group sessions with customised diet plans.</p>
                   
                <Link to="/plans" className='btn1 lg1'> Learn more </Link>
            </div>

            <div className="Programs-col fitness-programs">
                <h2>Fitness Programs</h2>
                <p>We offer a variety of fitness programs, including weight training, cardio,
                    yoga, and more. Our programs are designed to help our members achieve their fitness goals.
                    Start a healthy lifestyle with us.</p>
    
                    <Link to="/plans" className='btn1 lg1'> Learn more </Link>
            </div>


            </div>

        </div>



    </section>

    </div>
        
  )
}

export default Programs