import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './globalStyle';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import SimpleReactLightbox from 'simple-react-lightbox'
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
 
  return (
    <>
    <SimpleReactLightbox>

      <GlobalStyle/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer/>

    </SimpleReactLightbox>
    
    </>
  );
}

export default App;
