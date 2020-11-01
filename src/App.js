import React from 'react';
import Nav from './components/nav.js'
import Carousel from './components/carousel.js';
import Intro from './components/intro.js';
import Detail from './components/detail.js'
import Gallery from './components/gallery.js';
import Contact from './components/contact.js';
import Service from './components/services';
function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Intro />
      <Detail/>
      <Service/>
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
