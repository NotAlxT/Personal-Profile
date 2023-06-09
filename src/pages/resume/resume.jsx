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
              <h1 className='resumeTitleHeading'>Education</h1>
            </div>
          </div>
          <div className="resumeBoxD1">
            <div className="resumeDes1">
              <h3 className='resumeTitleItems des1'>4Geeks Academy</h3>
              <p className='resumeTitleItems des2'>2022-2023 Miami, FL</p>
              <p className='resumeTitleItems des3'>Full Stack-Developer</p>
            </div>
            <div className="resumeDes1">
              <h3 className='resumeTitleItems des1'>U.S. Army Ordnance School</h3>
              <p className='resumeTitleItems des2'>2015-2016 Fort Lee, VA</p>
              <p className='resumeTitleItems des3'>Mechanical Engineer</p>
            </div>
            <div className="resumeDes1">
              <h3 className='resumeTitleItems des1'>Quincy College</h3>
              <p className='resumeTitleItems des2'>2016-2018 Quincy, MA</p>
              <p className='resumeTitleItems des3'>Business Management</p>
            </div>
          </div>

          <div className="resumeBox2">
            <div className="resumeTitle2">
              <h1 className='resumeTitleHeading'>Projects</h1>
            </div>
          </div>
          <div className="resumeBoxD2">
            <div className="resumeDes2">
              <h3 className='resumeTitleItems des1'>Personal Portfolio</h3>
              <p className='resumeTitleItems des2'>03/2023-Present</p>
              <p className='resumeTitleItems des3'>Personal Profile/ Resume</p>
              <p className='resumeTitleItems des4'>
                <ul>
                  <li> Currently building a portfolio to showcase self</li>
                  <li> Language focuses on JavaScript and CSS</li>
                  <li> Framework focuses on React</li>
                </ul>
              </p>
            </div>
            <div className="resumeDes2">
              <h3 className='resumeTitleItems des1'>2AM</h3>
              <p className='resumeTitleItems des2'>12/2022-02/2023</p>
              <p className='resumeTitleItems des3'>Ecommerce website w social medial capabilities</p>
              <p className='resumeTitleItems des4'>
                <ul>
                  <li>Fully functional Mock e-commerce website</li>
                  <li>Language focuses on JavaScript and Phyton</li>
                  <li>Framework focuses on React</li>
                  <li>Team-built collaboration/project</li>
                </ul>
              </p>
            </div>
            {/* <div className="resumeDes2">
              <h3 className='resumeTitleItems des1'>Project Name</h3>
              <p className='resumeTitleItems des2'>date</p>
              <p className='resumeTitleItems des3'>des</p>
              <p className='resumeTitleItems des4'>Points</p>
            </div> */}
          </div>

          <div className="resumeBox3">
            <div className="resumeTitle3">
              <h1 className='resumeTitleHeading'>Work Experience</h1>
            </div>
          </div>
          <div className="resumeBoxD3">
            <div className="resumeDes3">
              <h3 className='resumeTitleItems des1'>Lead Bartender</h3>
              <p className='resumeTitleItems des2'>2015-Present</p>
              <p className='resumeTitleItems des3'>Fuji@InkBlock, Puttshack</p>
              <p className='resumeTitleItems des4'>
                <ul>
                  <li> Years of fast pace, high-stress timely management with excellent social skills</li>
                  <li> Seasoned leader & trainer</li>
                  <li> Tasked with the training of new associates</li>
                  <li> Organized schedules and supply</li>
                </ul>
              </p>
            </div>
            <div className="resumeDes3">
              <h3 className='resumeTitleItems des1'>Real Estate Agent</h3>
              <p className='resumeTitleItems des2'>2019-Present</p>
              <p className='resumeTitleItems des3'>Keller Williams Realty</p>
              <p className='resumeTitleItems des4'>
                <ul>
                  <li> Experienced with handling multiple high-value assets</li>
                  <li> Comfortable with negotiations & closing deals</li>
                  <li> Built own personal portfolio of four properties</li>
                  <li> Manages Rental Properties in multiple states</li>
                </ul>
              </p>
            </div>
            <div className="resumeDes3">
              <h3 className='resumeTitleItems des1'>United States Army</h3>
              <p className='resumeTitleItems des2'>2016-2023</p>
              <p className='resumeTitleItems des3'>Solider/Engineer</p>
              <p className='resumeTitleItems des4'>
                <ul>
                  <li> Trained to handle high-stress environments with efficiency and safety</li>
                  <li> Leadership role in tactical & logistical environments</li>
                  <li> Experienced in problem-solving with complex hierarchy structures </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="resumeBox4">
            <div className="skillTitle">
              <h1 className='resumeTitleHeading'>Skills</h1>
            </div>
          </div>
          <div className="resumeBoxD4">
            <div className="skillItems">
              <h3 className='resumeTitleItems des1'>Languages & Tools</h3>
              <p className='resumeTitleItems des3'>
                
            <i class="devicon-html5-plain-wordmark colored"></i> Html | 
            <i class="devicon-css3-plain-wordmark colored"></i> Css | 
            <i class="devicon-javascript-plain colored"></i> JavaScript | 
            <i class="devicon-react-original-wordmark colored"></i> React | 
            <i class="devicon-python-plain-wordmark colored"></i> Python | 
            <i class="devicon-postgresql-plain-wordmark colored"></i> SQL | 
            <br></br>
            <i class="devicon-flask-original-wordmark"></i> Flask | 
            <i class="devicon-nodejs-plain"></i> Node.js
          
                </p>
            </div>
            {/* <div className="skillItems">
              <h3 className='resumeTitleItems des1'>Skill Name</h3>
              <p className='resumeTitleItems des3'>des</p>
              <p className='resumeTitleItems des4'>Points</p>
            </div>
            <div className="skillItems">
              <h3 className='resumeTitleItems des1'>Skill Name</h3>
              <p className='resumeTitleItems des3'>des</p>
              <p className='resumeTitleItems des4'>Points</p>
            </div> */}
          </div>
        </section>

      </div>
    </div>
  )
}
