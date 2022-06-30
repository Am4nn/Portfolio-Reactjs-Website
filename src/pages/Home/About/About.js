import React from 'react'
import classes from './styles.module.css'

const About = () => {
    return (
        <div id='about' className={classes.about} >
            <div className={classes.aboutSection}>
                <h1 className={classes.aboutHeading}>
                    <strong>About Me</strong>
                </h1>
            </div>
        </div>
    )
}

export default About