import { GiHamburgerMenu } from 'react-icons/gi';
import { useLocation } from 'react-router-dom'

const Header = ({ isMobile, showMenu }) => {

    const location = useLocation()

    const aboutStyle = { borderBottom: (location.pathname === "/") ? "2px solid black" : "none" }
    const projectsStyle = { borderBottom: (location.pathname === "/projects") ? "2px solid black" : "none" }
    const resumeStyle = { borderBottom: (location.pathname === "/resume") ? "2px solid black" : "none" }

    return (
    <header>
        <div className='header-container'>
            <div className='header-left'>
                <a id='title' href="/">Stav Rones</a>
            </div>
            <div className='header-right'>
                {
                    isMobile? 
                    <GiHamburgerMenu id='hamburger' onClick={showMenu} />
                    : 
                    <>
                        <a href="/" style={aboutStyle}>About</a>
                        <a href="/projects" style={projectsStyle}>Projects</a>
                        <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer noopener" style={resumeStyle}>Resume</a>
                    </>
                }
            </div>
        </div>        
    </header>
    )
}

export default Header


// <a href="https://github.com/srones" target="_blank" rel="noreferrer noopener">
{/* <img src = {githubImage} alt = "pro_pic" className = 'header__icon' />
</a>
<a href="https://www.linkedin.com/in/stavrones/" target="_blank" rel="noreferrer noopener">
    <img src = {linkedinImage} alt = "pro_pic" className = 'header__icon' />
</a>   */}