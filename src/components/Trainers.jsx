import React from 'react';
import TrainerImg from '../images/Trainer.png';
import './Trainers.css'

function Trainers() {
  return (
    <div id='trainers'>
     <section className="Trainers" >
      <h1>OUR TRAINERS</h1>
      <h6>Get a heads up of our professional trainers who are rated the best</h6>
      <div className="main" >
        
        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 1</strong>
                <span>Branch Name 1</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>

       
        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 2</strong>
                <span>Branch Name 2</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>

      
        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 3</strong>
                <span>Branch Name 3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>

        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 1</strong>
                <span>Branch Name 1</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>

   
        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 2</strong>
                <span>Branch Name 2</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>

      
        <div className="comment-box">
          <div className="box-top">
            <div className="Profile">
              <div className="profile-image">
              <img src={TrainerImg} alt="head_img" />
              </div>
              <div className="Name">
                <strong>Trainer Name 3</strong>
                <span>Branch Name 3</span>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>
              Expert in strength training, <br />
              cardiovascular conditioning, <br />
              and nutrition guidance. <br />
            </p>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default Trainers