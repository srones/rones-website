import {useState} from 'react'
import { FaAngleLeft } from 'react-icons/fa';

const MobileMenu = ({ hideMenu }) => {

    return (
        <div className='mobile-menu'>
            <FaAngleLeft id='back-button' onClick={hideMenu}/>
            <div className='mobile-menu-container'>
                <a href="/">About</a>
                <a href="/projects">Projects</a>
                <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer noopener">Resume</a>
            </div>
        </div>
    )
}

export default MobileMenu
