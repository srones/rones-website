import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Projects from './components/Projects';

import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(false)

    const updateDimensions = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    useEffect(() => {
        updateDimensions()  
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

  return (
    <BrowserRouter>

      {/* --------------------- Header --------------------- */}
      <Header isMobile={isMobile}/>

      {/* --------------------- Body --------------------- */}

      <div className="body">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </div>

      {/* --------------------- Footer --------------------- */}

      {/* <footer>
        <p>Contact:</p>
        <p>stav.rones@gmail.com</p>
      </footer> */}

    </BrowserRouter>
  );
}

export default App;
