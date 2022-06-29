import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import About from './About/About';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <Intro />
            <About />
            <Projects />
        </Fragment>
    )
}

export default Home;