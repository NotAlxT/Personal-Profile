import React from 'react'
import '../portfolio/portfolio.css'
import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion'
// import images from '../../img/images'
import { useRef, useEffect, useState } from 'react';
import image1 from '../../img/bg1.jpg'
import image2 from '../../img/bg2.jpg'
import image3 from '../../img/bg3.jpg'


export default function Portfolio() {

  return (
    <div id='portfolio'>

      {/* <motion.div className='portfolioContainer'>
        <motion.div className='portfolioMainContainer'>
          <motion.div className='portfolioSlider'>
            {images.map(image => {
              return (

                <motion.div  className='sliderChild'>
                  <img src={image} alt="" />
                  
                </motion.div>

              );
            })}
          </motion.div><div className='sliderDes'>hello</div>
        </motion.div>
      </motion.div> */}

      <div className="portfolioContainer">
        <btn className="sliderLeft"><Icon className='sliderIcon' icon="ep:arrow-left" /></btn>
        <div className="portfolioMainContainer">
          <div className="portfolioSlider">

            <div className="sliderChild">
              <img className="sliderImg" src={image1}></img>
              <div className="sliderDes">des</div>
            </div>

            <div className="sliderChild">
              <img className="sliderImg " src={image2}></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image3}></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image1}></img>
              <div className="sliderDes">des</div>
            </div>
            <div className="sliderChild">
              <img className="sliderImg " src={image2}></img>
              <div className="sliderDes">des</div>
            </div>

          </div>
        </div>
        <btn className="sliderRight"><Icon className='sliderIcon' icon="ep:arrow-right" /></btn>
      </div>
    </div>
  )
}
