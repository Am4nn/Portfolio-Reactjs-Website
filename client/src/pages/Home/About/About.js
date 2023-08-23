import React from 'react';
import styles from './About.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Skills from './Skills/Skills';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <SectionHeading
                subText="Introduction"
                headText="About Me"
            />
            <Skills />
        </section>
    )
}

export default About;