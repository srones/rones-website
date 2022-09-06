import {useState} from 'react'
import { FaAngleLeft } from 'react-icons/fa';

const MobileMenu = ({ hideMenu }) => {

    return (
        <div className='mobile-menu'>
            <FaAngleLeft id='back-button' onClick={hideMenu}/>
            <div className='mobile-menu-container'>
                <a href="/resume">Resume</a>
                <a href="/projects">Projects</a>
                <a href="https://github.com/srones" target="_blank" rel="noreferrer noopener">Github</a>
                <a href="https://www.linkedin.com/in/stavrones/" target="_blank" rel="noreferrer noopener">Linkedin</a>  
            </div>
        </div>
    )
}

export default MobileMenu
