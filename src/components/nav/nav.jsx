import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import LinkedInImage from '../../img/Daco_1015960.png'
import GitHubImage from '../../img/Github.png'
import { Icon } from '@iconify/react';
import Selfie from '../../img/selfie.jpg'


export default function Nav() {
  return (

    <div className="navContainer">
      <div className='navMainContainer'>
        <div className='upperContainer'>
          <span className='outerProfileCircle'>
            <span className='innerProfileCircle'>
              <img />
            </span>
          </span>
        </div>
        <div className='navNameContainer'>
          <h1 className='navName'> Alex Tran </h1>
        </div>
        <div className='socailMediaContainer'>
          <span className='socialMediaTag'>
            <a href="https://www.linkedin.com/in/notalxt/" target='_blank'>
              <img src={LinkedInImage} alt="LinkedIn" />
            </a>
          </span>
          <span className='socialMediaTag'>
            <a href="https://github.com/NotAlxT" target='_blank'>
              <img src={GitHubImage} alt="GitHub" />
            </a>
          </span>
        </div>
        <div className='navLinkContainer'>
          <span className='navLink' onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#home');
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }}><Icon icon="carbon:home" /> Home </span>

          <span className='navLink' onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#resume');
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }}><Icon icon="mdi:resume" height="19" />Resume</span>
          <span className='navLink' onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#portfolio');
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }}><Icon icon="carbon:portfolio" height="19" />Portfolio</span>
          <span className='navLink' onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#about');
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }}><Icon icon="ic:baseline-person-outline" height='19' />About</span>
          {/* <span className='navLink' onClick={(e) => {
            e.preventDefault();
            const targetElement = document.querySelector('#contact');
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }}><Icon icon="ic:outline-email" height="19" />Contact</span> */}
        </div>
      </div>
    </div>
  )
}
