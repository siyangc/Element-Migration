import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import './carousel.css'
export default class carousel extends Component {
    render() {
        return (
            <div id="carousel">
                <Carousel interval="5000">
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
