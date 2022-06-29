import React, { Fragment } from 'react'
import Cube from '../../../../components/Cube/Cube'
import classes from './projectcard2.module.css'
import { Chip } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

/*
    projects = {
        imgs, title, description, tech[], site, github
    }
*/
// imgs = [front, back,  right, left, top, bottom]

const DotCard = props => {
    const { project } = props;

    return (
        <div className={classes.card}>
            <h1 className={classes.project_heading}> {project.title} </h1>

            <div className={classes.project_innerBody}>

                <div className={classes.project_textArea}>
                    <p className={classes.project_text}>{project.description}</p>
                </div>

                {/* <div className={classes.vertical_seperator} /> */}

                <div className={classes.project_chipsArea}>
                    {project.tech.map((text, index) =>
                        <Chip key={index} className={classes['chips-render']} label={text} variant="outlined" />
                    )}
                </div>

                {/* <div className={classes.vertical_seperator} /> */}

                <div className={classes.project_linkArea}>
                    {project.site && <a className={`${classes.project_site} ${classes.project_link}`} href={project.site}>Website</a>}
                    {project.github && <a className={`${classes.project_git} ${classes.project_link}`} href={project.github}>Github</a>}
                </div>
            </div>
        </div>
    );
}

const ProjectCard2 = props => {
    const { project } = props;

    const isMobile = useMediaQuery({
        query: '(max-width:1000px)'
    })

    const pattern1 = (
        <Fragment>
            <Cube images={project.imgs} />
            <DotCard project={project} />
        </Fragment>
    );

    const pattern2 = (
        <Fragment>
            <DotCard project={project} />
            <Cube images={project.imgs} />
        </Fragment>
    );

    return (
        <div className={classes.project_body}>
            {(isMobile || project.key % 2 === 0) ? pattern1 : pattern2}
        </div >
    );
}

export default ProjectCard2;