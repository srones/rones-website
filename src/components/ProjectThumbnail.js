import { useState, useEffect } from 'react'
import '../App.css'

const ProjectThumbnail = ({ project, onClick }) => {
  
  return (
    <div className="project-thumbnail" onClick={onClick}>
      <img alt='thumbnail_image' src={project.image}/>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectThumbnail
