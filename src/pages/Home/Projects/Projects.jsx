import React from 'react';
import styles from './Projects.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <SectionHeading
                subText="Some Things I’ve Built"
                headText="Projects"
            />
        </section>
    )
}

export default Projects;