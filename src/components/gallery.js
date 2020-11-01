import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import './gallery.css'
export default class gallery extends Component {
    state = {
        picture_index : [
            '001','002','003','004','005','006','007','008','009','010',
            '011','012','013','014','015','016','017','018','019','020',
            '021','022','023','024','025','026','027','028','029','030',
            '031','032','033','034','035','036','037','038','039','040'
        ]
    }
    render() {
        return (
            <div id='gallery'>
                
                <Carousel>
                    {this.state.picture_index.map((index)=>{
                        return  <Carousel.Item>
                                <img
                                className="align-middle"
                                src={`/photos/${index}.jpg`}
                                alt="First slide"                            
                                />
                                </Carousel.Item>
                        })
                    }
                </Carousel>
               
            </div>
        )
    }
}
