import React, { useEffect, useState } from 'react'
import DecoderText from '../../../components/DecoderText/DecoderText'
import "./style.css"
import ScramblingText from './../../../components/ScramblingText/ScramblingText';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { introAnimatedText, myName, shortDescription } from "../../../utils/config";
// import { Link } from 'react-router-dom'

const Intro = () => {

    const animationClass = "fadeup", loaderDelay = 1000, mountDelay = 1000;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    const children = [
        <div style={{ paddingBottom: 15 }} className="hithere font-2-4">
            Hi There !
        </div>,
        <h1 className='myname mb-1x font-2-4'>
            <DecoderText text={`I’m ${myName}`} eachCharClass="namechar" delay={250} />
        </h1>,

        <h3>{shortDescription}</h3>,

        <div className="mytextcolorwhite fluidz-48 mb-5 font-2-4" style={{ fontWeight: 500 }}>
            <ScramblingText data={introAnimatedText} delay={1500} />
        </div>,

        // <p className="mytextcolorwhite mb-1x p">
        //     I'm a tech enthusiastic person who loves and live to code. I work hard each and every day to expertise my skills and develop new skills.
        // </p>,

        // <div>
        //     <Link to="/resume">
        //         <div id="button_p" className="ac_btn btn">
        //             <span className="btn_text">My Resume</span>
        //             <div className="ring one"></div>
        //             <div className="ring two"></div>
        //             <div className="ring three"></div>
        //         </div>
        //     </Link>
        //     <Link to="/contact">
        //         <div id="button_h" className="ac_btn btn">
        //             <span className="btn_text">Contact Me</span>
        //             <div className="ring one"></div>
        //             <div className="ring two"></div>
        //             <div className="ring three"></div>
        //         </div>
        //     </Link>
        // </div>
    ];



    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState('true');
    const [scrollIndicatorIsMount, setScrollIndicatorIsMount] = useState(false);

    useEffect(() => {

        const hiddenId = setTimeout(() => setScrollIndicatorHidden('false'), (mountDelay + loaderDelay - 1));
        const mountId = setTimeout(() => setScrollIndicatorIsMount(true), (mountDelay + loaderDelay));

        const toggleAtTop = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled >= 20) setScrollIndicatorHidden('true');
            else if (scrolled < 20) setScrollIndicatorHidden('false');
        };
        window.addEventListener('scroll', toggleAtTop);

        return () => {
            clearTimeout(hiddenId);
            clearTimeout(mountId);
            window.removeEventListener('scroll', toggleAtTop);
        }
    }, []);



    return (
        <section id="home" className="section">
            <div className="intro_sec d-flex align-items-center ">
                <div className="intro mx-auto">
                    <TransitionGroup component={null}>
                        {isMounted && children.map((item, i) => (
                            <CSSTransition mountOnEnter={false} key={`intro-transition-${i}`} classNames={animationClass} timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
            <a
                className='scrollIndicator'
                data-hidden={scrollIndicatorIsMount ? scrollIndicatorHidden : 'true'}
                href='#about'
            >scrollIndicator</a>
        </section>
    )
}

export default Intro;