import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projects_list } from '../projects/project_list'

const Project = () => {

    const [currentProject, setCurrentProject] = useState({})
    let {id} = useParams()

    useEffect((() => {
      
        var project = projects_list.find(obj => {
          return obj.id === id
        })
    
        if (project !== undefined) {
          setCurrentProject(project)
        }
    
        window.onpopstate = () => {
          window.location.reload(false)
        }
      }), [])

    return (
        <div className="project-container">
          <div className="project-header">
            <h1>{currentProject.title}</h1>
            <p className="date">{currentProject.date}</p>
            <div className="thumbnail-tags-container">
                {
                  currentProject.tags?.map((tag) => {
                    return <p className="thumbnail-tag" key={tag}>{tag}</p>
                  })
                }
            </div>
          </div>
          {currentProject.jsx}
        </div>
    )
}

export default Project
