import React from 'react';
import styles from './About.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <SectionHeading
                subText="Introduction"
                headText="About Me"
            />
        </section>
    )
}

export default About;