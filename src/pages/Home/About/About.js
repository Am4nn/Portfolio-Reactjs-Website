import React from 'react';
import classes from './styles.module.css'
import myPic from '../../../assests/Images/aboutpic.jpg';
// import DecoderText from '../../../components/DecoderText/DecoderText';

const aboutMeText = `
    I am an enthustic Web developer.
    I can conjur a website from nothing into existence,
    fully formed. I do not use tricks, nor is this magic.
    I specialize in manipulating the very fabric of the web,
    its raw materials of HTML, CSS, JavaScript, and SVG.

    I can plan, design, build, launch, and maintain a website myself
    I have worked with React and Titanium SDK,

    A full-stack developer knows no bounds.
    And when they find one they cross it without hesitation,
    boldly going into the unknown to return richer for it.
`;



const About = () => {
    return (
        <section id='about' className={classes.about} >
            <div className={classes.aboutSection}>
                <h1 className={classes.aboutHeading}>
                    <strong>About Me</strong>
                </h1>
                <div className={classes.aboutMain}>
                    <div className={classes.aboutText}>
                        <div className={classes.textHere}>
                            {aboutMeText}
                        </div>
                    </div>
                    <div className={classes.aboutPic}>
                        <img src={myPic} alt='my pic'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;