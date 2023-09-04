import React from 'react'
import styles from './Contact.module.css';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import EarthCanvas from '../../../components/EarthCanvas/EarthCanvas';
import Form from './Form/Form';
import StarsCanvas from '../../../components/StarCanvas/StarCanvas';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <SectionHeading
                subText="Get In Touch"
                headText="Say Hello"
            />
            <div className={styles.container}>
                <Form className={styles.dsizeF} />
                <EarthCanvas className={styles.dsizeE} />
            </div>
            <StarsCanvas />
        </section>
    )
}

export default Contact;