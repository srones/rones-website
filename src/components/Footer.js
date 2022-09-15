import React from 'react'
import { useLocation } from 'react-router-dom'

import propic from '../images/profile.jpeg'
import githubImage from '../images/icons/github.png'
import linkedinImage from '../images/icons/linkedin.png'
import gmailImage from '../images/icons/gmail.png'

const githubLink = "https://github.com/srones"
const linkedinLink = "https://www.linkedin.com/in/stavrones/"

const Footer = () => {

    const location = useLocation()

    // const aboutStyle = { borderRight: (location.pathname === "/") ? "2px solid black" : "none" }
    // const projectsStyle = { borderRight: (location.pathname === "/projects") ? "2px solid black" : "none" }
    // const resumeStyle = { borderRight: (location.pathname === "/resume") ? "2px solid black" : "none" }

    const aboutStyle = {}
    const projectsStyle = {}
    const resumeStyle = {}

    return (
        <div className='footer'>
            <div className='footer-left'>
            <img id='propic' src = {propic} alt = "img"/>
            <div className="footer-left-column">
                <h2>Stav Rones</h2>
                <p>Computer and Software Engineer</p>
                <div className='social-icons-container'>
                    <a href={githubLink} target="_blank" rel="noreferrer noopener">
                        <img className="socials-icon" src={githubImage} alt='img' />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noreferrer noopener">
                        <img className="socials-icon" src={linkedinImage} alt='img' />    
                    </a>
                    <a href="mailto:stav.rones@gmail.com">
                        <img className="socials-icon" src={gmailImage} alt='img' />
                    </a>
                </div>
            </div>
            </div>    
            <div className='footer-right'>
                <a href="/" style={aboutStyle}>About</a>
                <a href="/projects" style={projectsStyle}>Projects</a>
                <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer noopener" style={resumeStyle}>Resume</a>
            </div>
        </div>
    )
}

export default Footer
