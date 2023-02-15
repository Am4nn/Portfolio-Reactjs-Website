import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import DecoderText from '../../../components/DecoderText/DecoderText'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"

const data = {
    title: "I’m Aman Arya",
    skill: "MERN and Full Stack Developer",
    animated: [
        "I code websites trying to implement new features",
        "CPP and JavaScript are my Favs",
        "I love coding ",
        "I also love coding games",
    ],
    description: "I'm a tech enthusiastic person who loves and live to code. I work hard each and every day to expertise my skills and develop new skills.",
    img_url: "",
};

const Intro = () => {
    return (
        <section id="home" className="section">
            <div className="intro_sec d-flex align-items-center ">
                <div className="intro mx-auto">
                    {/* <div className='mypic pulse' /> */}
                    <h1 className='myname mb-1x'>
                        <DecoderText text={data.title} delay={300} />
                    </h1>
                    <h3>{data.skill}</h3>
                    <h1 className="mytextcolorwhite fluidz-48 mb-5" style={{ fontWeight: 500 }}>
                        <Typewriter
                            options={{
                                strings: data.animated,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </h1>
                    <p className="mytextcolorwhite mb-1x p">{data.description}</p>
                    <div>
                        <Link to="/resume">
                            <div id="button_p" className="ac_btn btn">
                                <span className="btn_text">My Resume</span>
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div id="button_h" className="ac_btn btn">
                                <span className="btn_text">Contact Me</span>
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro