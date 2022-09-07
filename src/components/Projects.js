import { useState } from 'react'

import ReactMarkdown from 'react-markdown'
import { FaAngleLeft } from 'react-icons/fa';
import { projects_list } from '../projects/project_list'

import ProjectThumbnail from './ProjectThumbnail'

const Projects = () => {
  
  // --------------- state --------------
  const [currentProject, setCurrentProject] = useState({})
  const [projects] = useState(projects_list)

  const projectClicked = (id) => {
    
    var project = projects.find(obj => {
      return obj.id === id
    })

    setCurrentProject(project)
  }

  return (

    <>
    {
      Object.keys(currentProject).length === 0 ? 
      <div className='projects-container'>
        {
        projects.map( (project) => (
          <ProjectThumbnail key={project.id} project={project} onClick={() => projectClicked(project.id)}/>
        ))
        }   
        <div className='project-thumbnail'></div>    
      </div>
      :
      <>
        <FaAngleLeft id='project-back-button' onClick={() => {setCurrentProject({})}}/>
        <pre>{JSON.stringify(currentProject, null, 2)}</pre>
      </>
      
    }
    </>
  )
}

export default Projects
