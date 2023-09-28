import React from 'react'
import { Icon } from '../../../../components/Icons/index';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ data }) => (
    <div className={styles["project-content"]}>
        <p className={styles["project-overline"]}>Featured Project</p>

        <h3 className={styles["project-title"]}>
            <a href={data.external} aria-label={`${data.title} Title Link`} target="_blank" rel="noreferrer">
                {data.title}
            </a>
        </h3>

        <div className={styles["project-description"]}>
            <p>{data.desciption}</p>
        </div>

        {data.tech.length && (
            <ul className={styles["project-tech-list"]}>
                {data.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                ))}
            </ul>
        )}

        <div className={styles["project-links"]}>
            {data.github && (
                <a href={data.github} aria-label={`${data.title} GitHub Link`} target="_blank" rel="noreferrer">
                    <Icon name="GitHub" />
                </a>
            )}
            {data.external && (
                <a href={data.external} aria-label={`${data.title} External Link`} className={styles["external"]} target="_blank" rel="noreferrer">
                    <Icon name="External" />
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;
