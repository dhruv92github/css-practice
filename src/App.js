import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.scss';
import Home from './components/Home';
import Web from './components/Web';
import Contact from './components/Contact';
import About from './components/About';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactJs from './components/ReactJs';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App ">
          <TopBar />
          <Header />
          <div className="content">
              <Route path="/" exact={true} component={Home}  />
              <Route path="/Web" exact={true} component={Web} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
              <Route path="/Web/React" component={ReactJs} />

          </div>
          <Footer />  
        </div>
        
      </Router>
    );
  }
}

export default App;
