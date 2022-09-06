import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';

import Header from './components/Header';
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Projects from './components/Projects';
import MobileMenu from './components/MobileMenu';

function App() {

  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const updateDimensions = () => {
    setIsMobile(window.innerWidth < 1024)
    if(window.innerWidth > 1024) {
      setShowMenu(false)
    }
  }
  
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
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
          </div>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
