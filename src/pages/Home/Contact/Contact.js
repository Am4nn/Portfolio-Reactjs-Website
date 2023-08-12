import React from 'react'
import styles from './Contact.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import EarthCanvas from '../../../components/EarthCanvas/EarthCanvas';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <SectionHeading
                subText="Get In Touch"
                headText="Say Hello"
            />
            <div className={styles.earthCanvas}>
                <EarthCanvas />
            </div>
        </section>
    )
}

export default Contact;