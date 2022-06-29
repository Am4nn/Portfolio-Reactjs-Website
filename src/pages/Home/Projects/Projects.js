import React from 'react'
import { Container } from "react-bootstrap"
import ProjectCard2 from './Project-Cards/ProjectCard2'
import classes from './projects.module.css'
import { all_projects } from './allProjects'

/*
    all_projects[i] = {
        imgs, title, description, tech[], site, github
    }
*/

const Projects = () => {

    return (
        <div id='projects' style={{
            marginTop: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Container fluid className={classes.projectSection}>
                <h1 className={classes.projectHeading}>
                    <strong>My Projects</strong>
                </h1>
                <div className={classes.projectCards}>
                    {all_projects.map((project, index) => <ProjectCard2 key={project.key} project={project} />)}
                </div>
            </Container>
        </div>
    )
}

export default Projects;