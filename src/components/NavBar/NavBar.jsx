import React, { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { HashLink } from 'react-router-hash-link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Social from "./Social/Social";
import { useMediaQuery } from "@mui/material";
import "./style.css"
import { Context } from "../../context/state";
import { hashRoutes, sections } from '../../utils/config'
import Logo from "../Logo/Logo";
import { Divide as Hamburger } from "hamburger-react";

const animationClass = "fadedown", mountDelay = 100;

const NavBar = () => {

    const [expand, setExpand] = useState(false);
    const isMobile = useMediaQuery('(max-width: 767.5px)');

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

    const { currentSection } = useContext(Context);
    // useEffect(() => {
    // for live update on url
    //     if (currentSection)
    //         window.history.replaceState({}, "", `#${currentSection}`);
    // }, [currentSection]);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            variant='dark'
            className={`navbar navfontfamily ${scrolled ? 'scrolled' : ''} ${expand ? 'navbar-expanded' : ''}`}
        >
            <Container className="nav-container-fix">
                <TransitionGroup component={null}>
                    {isMounted && [
                        <Brand />,
                        <Toggle expand={expand} setExpand={setExpand} />
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
                                            active={false}
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

const Brand = () => (
    <Navbar.Brand href="/" className="d-flex">
        <Logo />
    </Navbar.Brand>
);
const Toggle = ({ expand, setExpand }) => (
    <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar_tglbtn"
        onClick={() => setExpand(prev => prev ? false : "expanded")}
    >
        <Hamburger toggled={expand} />
    </Navbar.Toggle>
);

export default NavBar;
