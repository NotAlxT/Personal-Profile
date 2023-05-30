import React from 'react'
import "./resume.css"

export default function Resume() {
  return (
    <div className="resumeContainer" id='resume'>
      <div className='resumeMainContainer'>
        
        <section className="resumeSubContainer">
          <h1 className='resumeHeading'>Experience</h1>
          <div className="resumeTitle1">
            <h1>Education</h1>
            <p>Date</p>
            <p>Title</p>
            <p>Des</p>
          </div>
          <div className="resumeDes1">
            <p>Description1</p>
          </div>
        </section>

        {/* <section className="resumeSubContainer">
          <div className="resumeTitle2">
            <h1>Resume2</h1>
          </div>
          <div className="resumeDes2">
            <p>Description2</p>
          </div>
        </section>

        <section className="resumeSubContainer">
          <div className="resumeTitle3">
            <h1>Company</h1>
            <p>Date</p>
            <p>Title</p>
            <p>Des</p>
          </div>
          <div className="resumeDes3">
            <p>Description3</p>
          </div>
        </section> */}

        {/* <section className='skillsContainer'>
          <div className="skillTitle">
            <h1>Skills</h1>
            <p>Description</p>
          </div>
          <div className="skillItems">
          </div>
        </section> */}

      </div>
    </div>
  )
}
