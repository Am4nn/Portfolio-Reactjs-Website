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
            <div style={{
                width: "30rem",
                height: "30rem"
            }}>
                <EarthCanvas />
            </div>
        </section>
    )
}

export default Contact;