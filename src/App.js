import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// project data
import { projects_list } from './projects/project_list'

import Header from './components/Header';
import Homepage from './components/Homepage';
import Error from './components/Error';
import Projects from './components/Projects';
import MobileMenu from './components/MobileMenu';
import Project from './components/Project';

import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  // toggle mobile on window resize
  const updateDimensions = () => {
    setIsMobile(window.innerWidth < 1024)
    if(window.innerWidth > 1024) {
      setShowMenu(false)
    }
  }
  
  // add window resize listener
  useEffect(() => {
      updateDimensions() 
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <BrowserRouter>
      {
        showMenu ? 
        <MobileMenu hideMenu={() => setShowMenu(false)}/> 
        : 
        <>
          {/* --------------------- Header --------------------- */}
          <Header isMobile={isMobile} showMenu={() => setShowMenu(true)}/>

          {/* --------------------- Body --------------------- */}

          <div className="body">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<Projects projects_list={projects_list}/>} />
                <Route path="/projects/:id" element={<Project projects_list={projects_list}/>} />
                <Route path="*" element={<Error />} />
              </Routes>
          </div>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
