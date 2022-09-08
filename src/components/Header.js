import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import profileImage from '../images/profile.jpeg'
import linkedinImage from '../images/linkedin.png'
import githubImage from '../images/github.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ isMobile, showMenu }) => {

    const navigate = useNavigate()

    return (
    <header>
        <div className='header-container'>
            <div className='header-left'>
                <img className='header-image' onClick={() => {navigate("/")}}src = {profileImage} alt = "pro_pic"/>
                <a id='title' href="/">Stav Rones</a>
            </div>
            <div className='header-right'>

                {
                    isMobile? 
                    <GiHamburgerMenu id='hamburger' onClick={showMenu} />
                    : 
                    <>
                        <a href="/projects">Projects</a>
                        <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer noopener">Resume</a>
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
