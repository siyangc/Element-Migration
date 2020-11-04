import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import './carousel.css'
export default class carousel extends Component {
    state = {
        interval: 5000
    }
    render() {
        return (
            <div id="carousel">
                <Carousel interval={this.state.interval}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/photos/home1.jpg"
                        alt="First slide"
                        />                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/photos/home2.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/photos/home3.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
