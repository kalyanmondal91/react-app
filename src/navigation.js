import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#/">Home</Nav.Link>
                            <NavDropdown title="Formatter" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/formatter/xml">XML</NavDropdown.Item>
                                <NavDropdown.Item href="#/formatter/json">JSON</NavDropdown.Item>
                                <NavDropdown.Item href="#/formatter/html">HTML</NavDropdown.Item>
                                <NavDropdown.Item href="#/formatter/sql">SQL</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Validator" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/validator/xml">XML</NavDropdown.Item>
                                <NavDropdown.Item href="/validator/json">JSON</NavDropdown.Item>
                                <NavDropdown.Item href="/validator/html">HTML</NavDropdown.Item>
                                <NavDropdown.Item href="/validator/sql">SQL</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;