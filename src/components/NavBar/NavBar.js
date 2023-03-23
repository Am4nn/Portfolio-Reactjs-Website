import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./style.css"
import { HashLink } from 'react-router-hash-link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useScrollSpy from './../../hooks/useScrollSpy';

const hashRoutes = [
    ["Home", "/home/#home"], ["About", "/home/#about"], ["Projects", "/home/#projects"], ["Resume", "/resume"]
];
const sections = ['home', 'about', 'projects', 'resume'];
const animationClass = "fadedown", mountDelay = 100;

const NavBar = () => {

    const [expand, setExpand] = useState(false);

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
            className={`navbar navfontfamily ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <TransitionGroup component={null}>
                    {isMounted && [
                        <Navbar.Brand href="/" className="d-flex">
                            <span className='nav_ac navbar-brand' to="/">
                                AMAN
                            </span>
                        </Navbar.Brand>,
                        <Navbar.Toggle
                            aria-controls="responsive-navbar-nav"
                            onClick={() => {
                                setExpand(prev => prev ? false : "expanded");
                            }}
                        />
                    ].map((item, i) => (
                        <CSSTransition mountOnEnter={false} key={i} classNames='fade' timeout={2000}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <TransitionGroup component={null}>
                            {isMounted && hashRoutes.map((route, id) => (
                                <Nav.Link
                                    key={id}
                                    as={HashLink}
                                    to={route[1]}
                                    active={currentSection === sections[id]}
                                    onClick={() => setExpand(false)}
                                    className='myNavLink'
                                >
                                    {route[0]}
                                </Nav.Link>
                            )).map((item, i) => (
                                <CSSTransition mountOnEnter={false} key={i} classNames={animationClass} timeout={2000}>
                                    <Nav.Item style={{ transitionDelay: `${i + 1}00ms` }}>{item}</Nav.Item>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;
