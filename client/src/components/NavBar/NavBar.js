import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { HashLink } from 'react-router-hash-link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useScrollSpy from './../../hooks/useScrollSpy';
import Social from "./Social/Social";
import { useMediaQuery } from "@mui/material";
import resume from "../../assests/resume/Aman_Arya_Offcampus_Resume.pdf";
import "./style.css"

const hashRoutes = [
    ["Home", "/home/#home"],
    ["About", "/home/#about"],
    ["Experience", "/home/#experience"],
    ["Projects", "/home/#projects"],
    ["Contact", "/home/#contact"],
    ["Resume", resume]
];
const sections = hashRoutes.map(route => route[0].toLowerCase());
const animationClass = "fadedown", mountDelay = 100;

const NavBar = () => {

    const [expand, setExpand] = useState(false);
    const isMobile = useMediaQuery('(max-width: 769px)');

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => (window.scrollY > 50) ? setScrolled(true) : setScrolled(false);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    const currentSection = useScrollSpy(sections, 200);
    useEffect(() => {
        if (currentSection)
            window.history.replaceState({}, "", `#${currentSection}`);
    }, [currentSection]);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            variant='dark'
            className={`navbar navfontfamily ${scrolled ? 'scrolled' : ''}`}
        >
            <Container className="nav-container-fix">
                <TransitionGroup component={null}>
                    {isMounted && [
                        <Navbar.Brand href="/" className="d-flex">
                            <span className='nav_ac navbar-brand' to="/">
                                AMAN
                            </span>
                        </Navbar.Brand>,
                        <Navbar.Toggle
                            aria-controls="responsive-navbar-nav"
                            className={["navbar_tglbtn", expand ? "cross" : ""].join(" ")}
                            onClick={() => setExpand(prev => prev ? false : "expanded")}
                        />
                    ].map((item, i) => (
                        <CSSTransition mountOnEnter={false} key={`brand-transition-${i}`} classNames='fade' timeout={2000}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto class-nav-df-jc-ai" defaultActiveKey="#home">
                        <TransitionGroup component={null}>
                            {isMounted && hashRoutes.map((route, id) => {
                                if (route[0] === "Resume") {
                                    return (
                                        <Nav.Link
                                            key={`nav-link-${id}`}
                                            href={route[1]}
                                            onClick={() => setExpand(false)}
                                            className='myNavLink'
                                            target="_blank"
                                        >
                                            {route[0]}
                                        </Nav.Link>
                                    )
                                }
                                return (
                                    <Nav.Link
                                        key={`nav-link-${id}`}
                                        as={HashLink}
                                        to={route[1]}
                                        active={currentSection === sections[id]}
                                        onClick={() => setExpand(false)}
                                        className='myNavLink'
                                    >
                                        {route[0]}
                                    </Nav.Link>
                                )
                            }).map((item, i) => (
                                <CSSTransition mountOnEnter={false} key={`nav-transition-${i}`} classNames={animationClass} timeout={2000}>
                                    <Nav.Item style={{ transitionDelay: `${i + 1}00ms` }}>{item}</Nav.Item>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                        {isMobile && <Social />}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;
