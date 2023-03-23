import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import SocialSideBar from '../../components/LeftSideBar/LeftSideBar';
import Intro from './Intro/Intro';
import styles from './Home.module.css';
import About from './About/About';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <SocialSideBar />
            <main className={styles.mainComponent}>
                <Intro />
                <About />
                <Projects />
            </main>
        </Fragment>
    )
}

export default Home;