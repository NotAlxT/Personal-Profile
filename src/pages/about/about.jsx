import React from 'react'
import '../about/about.css'

export default function About() {
    return (
        <div className='aboutMainContainer' id='about'>
            <div className='aboutContainer'>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>Location</h1>
                    <div class="card card-1">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">Boston, MA</span>
                        </div>
                    </div>
                </section>

                <section className='aboutTitleBox'>
                    <div class="card card-2">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">AnhNTran56@gmail.com</span>
                        </div>
                    </div><h1 className='aboutTitle right'>Email</h1>
                </section>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>Phone Number</h1>
                    <div class="card card-3">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">(857) 271-8817</span>
                        </div>
                    </div>
                </section>

                <section className='aboutTitleBox'>
                    <div class="card card-4">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">Jan 25, 1996</span>
                        </div>
                    </div>
                    <h1 className='aboutTitle right'>Birthday</h1>
                </section>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>Code</h1>
                    <div class="card card-5">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">
                                <a href="https://github.com/NotAlxT/Personal-Profile" target='_blank' rel="noreferrer">Click me for code
                                </a>
                            </span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
