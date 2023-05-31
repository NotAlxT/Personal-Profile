import React from 'react'
import "./resume.css"

export default function Resume() {
  return (
    <div className="resumeContainer" id='resume'>
      <div className='resumeMainContainer'>

        <section className="resumeSubContainer">
          <h1 className='resumeHeading'>Experience</h1>
          <div className="resumeBox1">
            <div className="resumeTitle1">
              <h1>Education</h1>
              <p>Date</p>
              <p>Title</p>
              <p>Des</p>
            </div>
          </div>
          <div className="resumeBoxD1">
            <div className="resumeDes1">
              <p>Description1</p>
            </div>
          </div>

          <div className="resumeBox2">
            <div className="resumeTitle2">
              <h1>Projects</h1>
              <p>Date</p>
              <p>Title</p>
              <p>Des</p>
            </div>
          </div>
          <div className="resumeBoxD2">
            <div className="resumeDes2">
              <p>Description2</p>
            </div>
          </div>

          <div className="resumeBox3">
            <div className="resumeTitle3">
              <h1>Work Experience</h1>
              <p>Date</p>
              <p>Title</p>
              <p>Des</p>
            </div>
          </div>
          <div className="resumeBoxD3">
            <div className="resumeDes3">
              <p>Description3</p>
            </div>
          </div>

          <div className="resumeBox4">
            <div className="skillTitle">
              <h1>Skills</h1>
              <p>Date</p>
              <p>Title</p>
              <p>Des</p>
            </div>
          </div>
          <div className="resumeBoxD4">
            <div className="skillItems">
              <p>Skill Items</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
