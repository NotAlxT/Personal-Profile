import React from 'react'
import '../portfolio/portfolio.css'
import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion'
// import images from '../../img/images'
import { useRef } from 'react';
import image1 from '../../img/2AM1.png'
import image2 from '../../img/2AM2.png'
import image3 from '../../img/2AM3.png'
import image4 from '../../img/2AM4.png'
import image5 from '../../img/2AM5.png'
import image6 from '../../img/2AM6.png'

export default function Portfolio() {

  const sliderContainerRef = useRef(null);

  const scrollSliderLeft = () => {
    const tabsList = sliderContainerRef.current;
    const scrollAmount = -tabsList.clientWidth;
    tabsList.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  const scrollSliderRight = () => {
    const tabsList = sliderContainerRef.current;
    const scrollAmount = tabsList.clientWidth;
    tabsList.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleScrollEnd = () => {
    const tabsList = sliderContainerRef.current;
    if (tabsList.scrollLeft + tabsList.clientWidth > tabsList.scrollWidth) {
      tabsList.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="portfolioContainer" id='portfolio'><h1 className='ph1'>Portfolio</h1>
      <btn className="sliderLeft" onClick={scrollSliderLeft}><Icon className='sliderIcon' icon="ep:arrow-left" /></btn>
      <div className="portfolioMainContainer">
        <div className="portfolioSlider" ref={sliderContainerRef} onScroll={handleScrollEnd}>

          <div className="sliderChild">
            <img className="sliderImg" src={image1} alt='SliderImg'></img>
            <div className="sliderDes">
              <h1>2AM</h1>
              <p>2AM is an e-commerce website with social interaction, designed and developed by small team.</p>
            </div>
          </div>

          <div className="sliderChild">
            <img className="sliderImg " src={image2} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <p>Designed to be modern and sleek with a user-friendly interface.</p>
            </div>
          </div>
          <div className="sliderChild">
            <img className="sliderImg " src={image3} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <p>Authentication and integration with external APIs for collecting New/Returning Users' information</p>
            </div>
          </div>
          <div className="sliderChild">
            <img className="sliderImg " src={image4} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <p>Empowering honest reviews, our platform offers a remarkable feature: the ability to upload videos and pictures for public review. </p>
            </div>
          </div>
          <div className="sliderChild">
            <img className="sliderImg " src={image5} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <p>To ensure authenticity and genuine feedback, posting privileges are exclusively granted to verified purchasers.</p>
            </div>
          </div>
          <div className="sliderChild">
            <img className="sliderImg " src={image6} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <p>Modernized shopping page incorporates an intuitive chatbox, powered by both artificial intelligence and human expertise, ensuring unparalleled shopping ease and personalized assistance.</p>
            </div>
          </div>
          <div className="sliderChild">
            <img className="sliderImg " src={image1} alt='SliderImg'></img>
            <div className="sliderDes">
            <h1>2AM</h1>
            <a href="https://github.com/NotAlxT/2AM-group-project" target='_blank' rel="noreferrer"><p>Frontend Code</p></a>
            <a href="https://github.com/NotAlxT/2AM-BackEnd-Group-Project" target='_blank' rel="noreferrer"><p>Backend Code</p></a>
            </div>
          </div>

        </div>
      </div>
      <btn className="sliderRight" onClick={scrollSliderRight}><Icon className='sliderIcon' icon="ep:arrow-right" /></btn>
    </div>

  )
}
