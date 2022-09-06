import { useState, useEffect } from 'react'
import Project from './Project'

import reachImage from '../images/reach.png'

const Projects = () => {
  
  // --------------- state --------------
  const [projects] = useState([
      {
        id: 0,
        title: "Reach",
        description: "Landing page for Reach, an events-based social networking iOS platform of which I am the cofounder and sole developer",
        image: reachImage,
        link: "https://www.reachevents.social/"
      },
      {
        id: 1,
        title: "Subset Sum Project",
        description: "Heuristic Algorithms for solving Subset Sum: an NP-Complete combinatorial optimization problem",
        image: reachImage,
        link: "https://github.com/srones/Subset-Sum-Project"
      },

  ])

  const projectClicked = (id) => {
    
    var project = projects.find(obj => {
      return obj.id === id
    })

    window.open(project.link)
  }

  return (
    <div className='projects-container'>

      { 
        projects.map((project) => (
          <Project key={project.id} project={project} onClick={() => projectClicked(project.id)}/>
        ))
      }
      
    </div>
  )
}

export default Projects
