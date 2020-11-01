import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default class nav extends Component {
    render() {
        return (
            <div style={{maxWidth:"1030px",margin:"auto"}}>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">艾勒盟特 | Element</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                        
                        <Nav.Link href="#home">Home</Nav.Link>                                        
                        <Nav.Link href="#intro">Introduction</Nav.Link>
                        <Nav.Link href="#visa">Visa</Nav.Link>   
                        <Nav.Link href="#gallery">Activities</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
