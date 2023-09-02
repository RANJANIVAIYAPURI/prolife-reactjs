import React, { useEffect, useState } from 'react';
import revImage from '../images/rev1.png';
import './Reviews.css';


function Reviews() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
      {
          title: 'Health and Fitness is a lifestyle - 1',
        content: 'Transform your fitness journey at our state-of-the-art gym. Unleash your potential with cutting-edge equipment and facilities. Expert trainers to guide you towards your fitness goals. Vibrant and motivating atmosphere to keep you motivated. Clean and well-maintained spaces for a comfortable workout experience.  Join our community and take your fitness to the next level.',
        author: 'Tania Vincent',
        role: 'Media Influencer'
      },
      {
        title: 'Health and Fitness is a lifestyle - 2',
        content: 'Transform your fitness journey at our state-of-the-art gym. Unleash your potential with cutting-edge equipment and facilities. Expert trainers to guide you towards your fitness goals. Vibrant and motivating atmosphere to keep you motivated. Clean and well-maintained spaces for a comfortable workout experience.  Join our community and take your fitness to the next level.',
        author: 'Tania Vincent',
        role: 'Media Influencer'
      },
      {
          title: 'Health and Fitness is a lifestyle - 3',
          content: 'Transform your fitness journey at our state-of-the-art gym. Unleash your potential with cutting-edge equipment and facilities. Expert trainers to guide you towards your fitness goals. Vibrant and motivating atmosphere to keep you motivated. Clean and well-maintained spaces for a comfortable workout experience.  Join our community and take your fitness to the next level.',
          author: 'Tania Vincent',
          role: 'Media Influencer'
      },
      {
          title: 'Health and Fitness is a lifestyle - 4',
          content: 'Transform your fitness journey at our state-of-the-art gym. Unleash your potential with cutting-edge equipment and facilities. Expert trainers to guide you towards your fitness goals. Vibrant and motivating atmosphere to keep you motivated. Clean and well-maintained spaces for a comfortable workout experience.  Join our community and take your fitness to the next level.',
          author: 'Tania Vincent',
          role: 'Media Influencer'
        },
        {
            title: 'Health and Fitness is a lifestyle - 5',
            content: 'Transform your fitness journey at our state-of-the-art gym. Unleash your potential with cutting-edge equipment and facilities. Expert trainers to guide you towards your fitness goals. Vibrant and motivating atmosphere to keep you motivated. Clean and well-maintained spaces for a comfortable workout experience.  Join our community and take your fitness to the next level.',
            author: 'Tania Vincent',
            role: 'Media Influencer'
        },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); 
  
      return () => clearInterval(interval);
    }, );

  return (
    <div id='rev'>
        <section className="Reviews">
      <h1>OUR STORIES</h1>
      <h6>Here are a few reviews and comments from our clients</h6>
      <div className="container1">
        <div className="container-story">
          <div className="story-left">
            <div className="img-background"></div>
            <div className="img-image">
              <img src={revImage} alt="head_img" />
            </div>
          </div>
          <div className="story-right">
            <h2>{slides[activeSlide].title}</h2>
            <p>{slides[activeSlide].content}</p>
            <h3>{slides[activeSlide].author}</h3>
            <h5>{slides[activeSlide].role}</h5>
          </div>
        </div>
        <div className="indicator">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`btn4 ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Reviews