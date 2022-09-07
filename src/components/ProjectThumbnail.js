import { useState, useEffect } from 'react'
import '../App.css'

const ProjectThumbnail = ({ project, onClick }) => {
  
  return (
    <div className='project-thumbnail' onClick={onClick}>
      <div className='image-container'>
        <img className='thumbnail-image' alt='img' src={project.image}/>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectThumbnail
