import one from '../images/g1.png'
import two from '../images/g2.png'
import three from '../images/g3.png'
import four from '../images/g4.png'


import './Gallery.css'

function Gallery() {
  return (
    <div id='photos'> 
    <section className="Gallery">
    <h1>GALLERY</h1>
    <h6>Get to know our Gym ambiance and our events</h6>
    <div className="sliders">
        <div className="slider-track"> 
            <div className="slide1">
            <img src={one} alt="head_img" />

            </div>
            <div className="slide1">
            <img src={two} alt="head_img" />

            </div>
            <div className="slide1">
            <img src={three} alt="head_img" />

            </div>
            <div className="slide1">
            <img src={four} alt="head_img" />
             </div>
            
            
            
                       

        </div>

    </div>
</section>
    </div>
  )
}

export default Gallery