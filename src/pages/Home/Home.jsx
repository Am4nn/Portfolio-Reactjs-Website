import React, { Fragment, useContext, useEffect } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import SocialSideBar from '../../components/LeftSideBar/LeftSideBar';
import Footer from '../../components/Footer/Footer';
import Intro from './Intro/Intro';
import styles from './Home.module.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import { Context } from '../../context/state';
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator';

const Home = () => {
    const { refreshActiveNavLink } = useContext(Context);

    useEffect(() => {
        refreshActiveNavLink();
    }, [refreshActiveNavLink]);

    return (
        <Fragment>
            <DisplacementSphere />
            <SocialSideBar />
            <main id="portfolio-main" className={styles.mainComponent}>
                <Intro />
                <ScrollIndicator mountDelay={2000} href="#about" />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Home;