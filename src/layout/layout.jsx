import React from 'react'
import "./layout.css"
import Nav from "../components/nav/nav"
import Home from "../pages/home/home"
import About from "../pages/about/about"
import Resume from "../pages/resume/resume"
import Portfolio from "../pages/portfolio/portfolio"
// import Footer from "../components/footer/footer"
// import Contact from "../pages/contact/contact"

export default function Layout() {
  return (
    <div className='layoutContainer'>
      <nav>
        <Nav />
      </nav>

      <home>
        <Home />
      </home>

      <resume>
        <Resume />
      </resume>

      <portfolio>
        <Portfolio />
      </portfolio>
      
      <about>
        <About />
      </about>

    </div>
  )
}
