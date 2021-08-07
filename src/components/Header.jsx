import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold text-warning">
                        <small style={{ fontSize: '9px' }}>Anti</small>{' '}
                        <span className="text-danger">Cybersoft</span>{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink
                            to="/"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                            exact
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/select-car"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Select car
                        </NavLink>
                        <NavLink
                            to="/try-glass"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Try glass
                        </NavLink>
                        <NavLink
                            to="/book-ticket"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Book ticket
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
