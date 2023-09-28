import React from 'react';
import styles from './Projects.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { projectsData } from '../../../utils/config'
import ProjectCard from './ProjectCard/ProjectCard';
import BackgroundImage from './BackgroundImage/BackgroundImage';

const Projects = () => {

    return (
        <section id="projects">
            <SectionHeading
                subText="Some Things I’ve Built"
                headText="Projects"
            />

            <ul className={styles.projectGrid}>
                {projectsData && projectsData.map((data, indx) =>
                    <li key={indx} className={styles.projectCard}>
                        <ProjectCard data={data} />
                        <BackgroundImage
                            className={styles.backgroundImage}
                            imagesrc={data.image}
                            imagealt={data.title}
                        />
                    </li>
                )}
            </ul>

        </section>
    )
}

export default Projects;
