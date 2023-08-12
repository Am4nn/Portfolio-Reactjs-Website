import React from 'react'
import styles from './Experience.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const Experience = () => {
    return (
        <section id="experience" className={styles.experience}>
            <SectionHeading
                subText="Where I’ve Worked"
                headText="Work Experience"
            />
        </section>
    )
}

export default Experience;