import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import SocialSideBar from '../../components/LeftSideBar/LeftSideBar';
import Intro from './Intro/Intro';
import styles from './Home.module.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <SocialSideBar />
            <main id="portfolio-main" className={styles.mainComponent}>
                <Intro />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </Fragment>
    )
}

export default Home;