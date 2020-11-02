import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import {Navbar, Nav} from 'react-bootstrap';

export default class nav extends Component {

    
    render() {
        return (
            <div style={{maxWidth:"1030px",margin:"auto"}}>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">艾勒盟特 | Element</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                        
                        <Nav.Link href="/">
                            <FormattedMessage id="home" />
                        </Nav.Link>                                        
                        <Nav.Link href="#intro">
                            <FormattedMessage id="intro" />
                        </Nav.Link>
                        <Nav.Link href="#services">
                            <FormattedMessage id="visa" />
                        </Nav.Link>   
                        <Nav.Link href="#gallery">
                            <FormattedMessage id="act" />
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <FormattedMessage id="contact" />
                        </Nav.Link>
                        <Nav.Link onClick={this.props.switchLang}>
                            <FormattedMessage id="language" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
