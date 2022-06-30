import React, { useState } from 'react'
import ProjectCard from './Project-Cards/ProjectCard'
import classes from './projects.module.css'
import { all_projects } from './allProjects'
import { HashLink } from 'react-router-hash-link';

/*
    all_projects[i] = {
        imgs[], title, description, tech[], site, github, key
    }
*/

const projectsPerPage = 3;

const Projects = () => {

    const [projectsToShow, setProjectsToShow] = useState([...all_projects.slice(0, projectsPerPage)]);
    const [next, setNext] = useState(projectsPerPage);

    const handleLoadMore = () => {
        const slicedProjects = all_projects.slice(next, next + projectsPerPage);
        setProjectsToShow(oldState => [...oldState, ...slicedProjects])
        setNext(next => next += projectsPerPage);
    };

    const handleShowLess = () => {
        setProjectsToShow([...all_projects.slice(0, projectsPerPage)])
        setNext(projectsPerPage);
    }

    return (
        <div id='projects' className={classes.projects}>
            <div className={classes.projectSection}>
                <h1 className={classes.projectHeading}>
                    <strong>My Projects</strong>
                </h1>
                <div className={classes.projectCards}>
                    {projectsToShow.map(project =>
                        <ProjectCard key={project.key} project={project} />
                    )}
                </div>
                {projectsToShow.length < all_projects.length ?
                    <HashLink
                        to={'/home/#projectsEnd'}
                        className={classes.loadMore}
                        onClick={handleLoadMore}
                    >Load More Projects
                    </HashLink> :
                    <HashLink
                        to={'/home/#projects'}
                        className={classes.loadMore}
                        onClick={handleShowLess}
                    >Show Less Projects
                    </HashLink>
                }
                <div aria-hidden id='projectsEnd' />
            </div>
        </div>
    )
}

export default Projects;