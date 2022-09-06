import {useEffect, useState} from 'react'

import profileImage from '../images/profile.jpeg'
import linkedinImage from '../images/linkedin.png'
import githubImage from '../images/github.png'

const Header = ({ isMobile }) => {

    return (
    <header>
        <div className='header-container'>
            <div className='header-left'>
                <img className='header-image' src = {profileImage} alt = "pro_pic"/>
                <a id='title' href="/">Stav Rones</a>
            </div>
            <div className='header-right'>

                {
                    isMobile? 
                    <p>hamburger</p> 
                    : 
                    <>
                        <a href="/resume">Resume</a>
                        <a href="/projects">Projects</a>
                        <a href="https://github.com/srones" target="_blank" rel="noreferrer noopener">
                            <img src = {githubImage} alt = "pro_pic" className = 'header__icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/stavrones/" target="_blank" rel="noreferrer noopener">
                            <img src = {linkedinImage} alt = "pro_pic" className = 'header__icon' />
                        </a>  
                    </>
                }
            </div>
        </div>        
    </header>
    )
}

export default Header
