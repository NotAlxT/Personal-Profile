import React from 'react'
import '../portfolio/portfolio.css'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import images from '../../img/images'

export default function Portfolio() {

  return (
    <div id='portfolio'>

      <motion.div className='portfolioContainer'>
        <motion.div className='portfolioMainContainer'>
          <motion.div className='portfolioSlider'>
            {images.map(image => {
              return (

                <motion.div  className='sliderChild'>
                  <img src={image} alt="" />
                  <div>hello</div>
                </motion.div>

              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <div className="portfolioContainer">
        <btn className="sliderLeft"><Icon className='sliderIcon' icon="ep:arrow-left"/></btn>
        <div className="portfolioMainContainer">
          <div className="portfolioSlider">

            <div className="sliderChild">
              <div className="sliderImg " id='imgOne'>Item 1</div>
              <div className="sliderDes">des</div>
            </div>

            <div className="sliderChild">item2</div>
            <div className="sliderChild">item3</div>
            <div className="sliderChild">item4</div>
            <div className="sliderChild">item5</div>

          </div>
        </div>
        <btn className="sliderRight"><Icon className='sliderIcon' icon="ep:arrow-right" /></btn>
      </div> */}
    </div>
  )
}
