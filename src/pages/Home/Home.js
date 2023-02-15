import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import Intro from './Intro/Intro';
// import About from './About/About';
// import Projects from './Projects/Projects';

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <Intro />
            {/* <About />
            <Projects /> */}
        </Fragment>
    )
}

export default Home;