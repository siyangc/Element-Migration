import React, {useState, useEffect} from 'react';
import { IntlProvider} from 'react-intl';
import flatten from 'flat';
import {zhCN} from '../src/language/zh';
import {enUS} from '../src/language/en';
import Nav from './components/nav.js'
import Carousel from './components/carousel.js';
import Contact from './components/contact.js';
import Home from './pages/home.js'
import Visa from './pages/visa.js'
import {Route, BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './scrollToTop';
import SpeNav from './components/speNav';

function App() {

  const [lang, setLang] = useState('en')
  const [msg, setMsg] = useState(enUS)

  const switchLang = () => {
    if(lang==='en'){
      setLang('zh')
      setMsg(zhCN)
    }
      
    else if(lang==='zh'){
      setLang('en')
      setMsg(enUS)
    }      

  }
  
  return (
    <IntlProvider messages={flatten(msg)} locale={lang}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Route path='/' exact render={(props)=><Nav {...props} switchLang={switchLang}/>} /> 
          <Route path='/visa' exact render={(props)=><SpeNav {...props} switchLang={switchLang}/>} /> 
        
          <Carousel />           
          <Route path='/' exact component={Home} />   
          <Route path='/visa' component={Visa} /> 
          <Contact />           
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
