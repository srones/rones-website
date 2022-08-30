import { useState } from 'react'
import profileImage from './images/profile.jpeg'
import linkedinImage from './images/linkedin.png'
import githubImage from './images/github.png'
import './css/App.css';

import Resume from './components/Resume';
import Projects from './components/Projects';
import Homepage from './components/Homepage';

const Pages = {
  Homepage: "homepage",
  Projects: "projects",
  Resume: "resume",
}

function App() {

  const [currentPage, setCurrentPage] = useState(Pages.Homepage)

  return (
    <>
      {/* --------------------- Header --------------------- */}

      <header className="header">

        <div className='header__left'>

          <img 
            src = {profileImage} 
            alt = "pro_pic"
            className = 'header__image'
            onClick = { () => {setCurrentPage(Pages.Homepage)} }
          />

          <h3 
            onClick={ () => {setCurrentPage(Pages.Homepage)} }
          >
            Stav Rones
          </h3>
        </div>

        <div className='header__right'>
          <p 
            className="App-link"
            onClick={() => {setCurrentPage(Pages.Resume)}}
          >
            Resume
          </p>

          <p 
            className="App-link"
            onClick={() => {setCurrentPage(Pages.Projects)}}
          >
            Projects
          </p>

          {/* external links */}

          <a href="https://github.com/srones" target="_blank" rel="noreferrer noopener">
            <img 
              src = {githubImage} 
              alt = "pro_pic"
              className = 'header__icon'
            />
          </a>

          <a href="https://www.linkedin.com/in/stavrones/" target="_blank" rel="noreferrer noopener">
            <img 
              src = {linkedinImage} 
              alt = "pro_pic"
              className = 'header__icon'
            />
          </a>
        </div>

      </header>

      {/* --------------------- Body --------------------- */}

      <div className="body">

        {(() => {
          switch(currentPage) {
            case Pages.Homepage:
              return <Homepage />
            case Pages.Resume:
              return <Resume />
            case Pages.Projects:
              return <Projects />
            default:
              break
          }
        })() }
      </div>

      {/* --------------------- Footer --------------------- */}

      <footer>
        <p>Contact:</p>
        <p>stav.rones@gmail.com</p>
      </footer>

    </>
  );
}

export default App;
