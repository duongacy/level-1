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
                            to="/car-select"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Select car
                        </NavLink>
                        <NavLink
                            to="/glass-try"
                            className="nav-link"
                            activeClassName="text-white fw-bold"
                        >
                            Try glass
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
