import React from 'react'

import propic from '../images/profile.jpeg'
import neuImage from '../images/neu-image.png'
import buaImage from '../images/bua-image.jpeg'

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <img id='propic-homepage' src = {propic} alt = "img"/>

      <section>
        <h2>About me</h2>
        <p>I recently completed my M.S. and am searching for a full time Software Engineering role focused on full stack system architecture and optimization. My passions are to collaborate with driven, capable professionals to build and bring a high quality product to life.</p>
      </section>

      <section>
        <h2>Education</h2>

        <div className='education-container'>
          <img src={neuImage} alt="img" className='education-image'/>
          <div>
            <b>Northeastern University</b> | Boston, MA <br/>
            <i>Sep 2017 - June 2022</i>
            <p>
              <li>M.S. in Computer Engineering: <i>Machine Learning, Computer Vision and Algorithms</i></li>
              <li>B.S. in Computer Engineering</li>
            </p>
          </div>

        </div>

        <div className='education-container'>
        <img src={buaImage} alt="img" className='education-image'/>
            <div>
              <b>Boston University Academy</b> | Boston, MA <br/>
              <i>Sep 2013 - June 2017</i>
              <p>
                <li>Captain of Rowing and Basketball</li>
                <li>Guitarist for Jazz Band</li>
                <li>Awareded honors for senior thesis</li>
              </p>
            </div>
        </div>

      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-section">
            <b>Back End</b>
            <ul>
              <li>Firebase</li>
              <li>NodeJS</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-section">
            <b>Front End</b>
            <ul>
              <li>iOS - Swift</li>
              <li>Andoid - Java</li>
              <li>Web - ReactJS</li>
              <li>Cross Platform - Flutter</li>
            </ul>
          </div>
          <div className="skill-section">
            <b>Frameworks</b>
            <ul>
              <li>Python (Numpy, MatPlotLib, OpenCV) </li>
              <li>Matlab</li>
              <li>Git</li>
              <li>Bash (Linux)</li>
            </ul>
          </div>
          </div>
      </section>
    </div>
  )
}

export default Homepage
