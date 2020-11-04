import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl'
import {Navbar, Nav} from 'react-bootstrap';
export default class nav extends Component {

    
    render() {
        return (
            <div style={{maxWidth:"1030px",margin:"auto"}}>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">艾勒盟特 | Element</Navbar.Brand> 
                                     
                        
                        <Nav.Link onClick={this.props.switchLang}>
                            <FormattedMessage id="language" />
                        </Nav.Link>
                     
                </Navbar>
            </div>
        )
    }
}
