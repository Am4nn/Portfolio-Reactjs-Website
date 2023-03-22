import React, { Fragment } from 'react'
import DisplacementSphere from '../../components/DisplacementSphere/DisplacementSphere';
import SocialSideBar from '../../components/LeftSideBar/LeftSideBar';
import Intro from './Intro/Intro';
// import About from './About/About';
// import Projects from './Projects/Projects';

const Home = () => {
    return (
        <Fragment>
            <DisplacementSphere />
            <SocialSideBar />
            <Intro />
            {/* <About /> */}
            {/* <Projects /> */}
        </Fragment>
    )
}

export default Home;