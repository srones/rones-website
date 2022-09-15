import { useState, useEffect } from 'react'
import '../App.css'

const ProjectThumbnail = ({ project, onClick }) => {
  
  return (
    <div className='project-thumbnail' onClick={onClick}>
      <div className='image-container'>
        <img className='thumbnail-image' alt='img' src={project.image}/>
      </div>
        <div className='padded-content'>
        <h3 className="no-margin">{project.title}</h3>
        <p><i>{project.date}</i></p>
        <p>{project.description}</p>
        <div className="thumbnail-tags-container">
          {
            project.tags.map((tag) => {
              return <div className="thumbnail-tag" key={tag}>{tag}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectThumbnail
