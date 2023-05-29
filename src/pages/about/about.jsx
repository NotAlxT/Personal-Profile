import React from 'react'
import '../about/about.css'

export default function About() {
    return (
        <div className='aboutMainContainer' id='about'>
            <div className='aboutContainer'>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>Birthday</h1>
                    <div class="card card-1">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">January 25, 1996</span>
                        </div>
                    </div>
                </section>

                <section className='aboutTitleBox'>
                    <div class="card card-2">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">About</span>
                        </div>
                    </div><h1 className='aboutTitle right'>test</h1>
                </section>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>test</h1>
                    <div class="card card-3">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">About</span>
                        </div>
                    </div>
                </section>

                <section className='aboutTitleBox'>
                    <div class="card card-4">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">About</span>
                        </div>
                    </div>
                    <h1 className='aboutTitle right'>test</h1>
                </section>

                <section className='aboutTitleBox'>
                    <h1 className='aboutTitle left'>test</h1>
                    <div class="card card-5">
                        <div class="cardInfo">
                            <span className="aboutTitleDes">About</span>
                        </div>
                    </div>
                </section>

                {/* <section >
                    <div className='aboutBox ' >
                        <h3 className="aboutPersonalInfo">Full-Stack Developer</h3>
                        <div className='aboutPersonalPoints'>
                            <ul>
                                <li>Birthday</li>
                                <li>Age</li>
                                <li>Website</li>
                                <li>Phone</li>
                                <li>Email</li>
                                <li>City</li>
                            </ul>
                        </div>
                    </div>
                </section>
 */}

            </div>
        </div>
    )
}
