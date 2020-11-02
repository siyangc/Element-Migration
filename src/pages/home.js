import React from 'react'
import Intro from '../components/intro.js';
import Detail from '../components/detail.js'
import Gallery from '../components/gallery.js';
import Service from '../components/services';
export default function home() {
    return (
        <div>
            <Intro />
            <Detail/>
            <Service/>
            <Gallery />
        </div>
    )
}
