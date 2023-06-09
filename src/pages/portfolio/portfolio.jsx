import React from 'react'
import '../portfolio/portfolio.css'
import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion'
// import images from '../../img/images'
import { useRef } from 'react';
import image1 from '../../img/bg1.jpg'
import image2 from '../../img/bg2.jpg'
import image3 from '../../img/bg3.jpg'

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
      <div className="portfolioContainer" id='portfolio'>
        <btn className="sliderLeft" onClick={scrollSliderLeft}><Icon className='sliderIcon' icon="ep:arrow-left" /></btn>
        <div className="portfolioMainContainer">
          <div className="portfolioSlider" ref={sliderContainerRef} onScroll={handleScrollEnd}>

            <div className="sliderChild">
              <img className="sliderImg" src={image1} alt='SliderImg'></img>
              <div className="sliderDes">hello im here</div>
            </div>

            <div className="sliderChild">
              <img className="sliderImg " src={image2} alt='SliderImg'></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image3} alt='SliderImg'></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image1} alt='SliderImg'></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image2} alt='SliderImg'></img>
              <div className="sliderDes">des</div>
            </div>
      
          </div>
        </div>
        <btn className="sliderRight" onClick={scrollSliderRight}><Icon className='sliderIcon' icon="ep:arrow-right" /></btn>
      </div>
    
  )
}
