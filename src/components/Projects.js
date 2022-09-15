import { useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import ProjectThumbnail from './ProjectThumbnail'

const Projects = ({ projects_list }) => {
  
  const navigate = useNavigate()

  // project clicked
  const projectClicked = (id) => {
    navigate(`/projects/${id}`)
    window.location.reload(false)
  }

  // browser back navigate
  useEffect((() => {    
    window.onpopstate = () => {
      window.location.reload(false)
    }
  }), [])

  // --------------- return --------------
  return (
    <>
      <h2 className='projects-title'> Featured </h2>
      <div className='projects-container'>
        {
        projects_list.map( (project) => (
          project.pinned ? <ProjectThumbnail key={project.id} project={project} onClick={() => projectClicked(project.id)}/> : <Fragment key={project.id} />
        ))
        }   
      </div>
      <h2 className='projects-title'> Other </h2>
      <div className='projects-container'>
        {
        projects_list.map( (project) => (
          project.pinned ? <Fragment key={project.id} /> : <ProjectThumbnail key={project.id} project={project} onClick={() => projectClicked(project.id)}/>
        ))
        }   
      </div>
    </>
  )
}

export default Projects
