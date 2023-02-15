import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./style.css"
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [expand, setExpand] = useState(false);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className='navbar navfontfamily'
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span className='nav_ac navbar-brand' to="/">
                        AMAN
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false : "expanded");
                    }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={HashLink}
                                to="/home/#home"
                                onClick={() => setExpand(false)}
                                className='myNavLink'
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={HashLink}
                                to="/home/#about"
                                onClick={() => setExpand(false)}
                                className='myNavLink'
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={HashLink}
                                to="/home/#projects"
                                onClick={() => setExpand(false)}
                                className='myNavLink'
                            >
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={HashLink}
                                to="/resume"
                                onClick={() => setExpand(false)}
                                className='myNavLink'
                            >
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;
