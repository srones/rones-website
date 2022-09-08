import { useState, useEffect } from 'react'
import { useLocation, useParams, browserHistory } from "react-router-dom"
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

import ProjectThumbnail from './ProjectThumbnail'
import { projects_list } from '../projects/project_list'

const Projects = () => {
  
  // --------------- state --------------
  const [currentProject, setCurrentProject] = useState({})
  const navigate = useNavigate()
  let {id} = useParams()

  // --------------- functions --------------
  const projectClicked = (id) => {
    navigate(`/projects/${id}`)
    window.location.reload(false)
  }

  useEffect((() => {

    console.log(id)

    var project = projects_list.find(obj => {
      return obj.id == id
    })

    if (project !== undefined) {
      setCurrentProject(project)
    }

    window.onpopstate = () => {
      window.location.reload(false)
    }
  }),[])

  // --------------- return --------------
  return (

    <>
    {
      Object.keys(currentProject).length === 0 ? 
      <>
        <h2 className='projects-title'> Pinned </h2>
        <div className='projects-container'>
          {
          projects_list.map( (project) => (
            project.pinned ? <ProjectThumbnail key={project.id} project={project} onClick={() => projectClicked(project.id)}/> : <></>
          ))
          }   
        </div>
        <h2 className='projects-title'> Other </h2>
        <div className='projects-container'>
          {
          projects_list.map( (project) => (
            project.pinned ? <></> : <ProjectThumbnail key={project.id} project={project} onClick={() => projectClicked(project.id)}/>
          ))
          }   
        </div>
      </>
      :
      <>
        <img className="project-image" src={currentProject.image} alt="img" />
        {currentProject.jsx}
      </>
    }
    </>
  )
}

export default Projects
