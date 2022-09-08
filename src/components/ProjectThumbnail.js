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
      <div className="thumbnail-tags-container">
        {
          project.tags.map((tag) => {
            return <p className="thumbnail-tag">{tag}</p>
          })
        }
      </div>
    </div>
  )
}

export default ProjectThumbnail
