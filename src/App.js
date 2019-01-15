import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.scss';
import Home from './components/Home';
import Web from './components/Web';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
        <Header />
          <div className="content">
              <Route path="/" exact={true} component={Home}  />
              <Route path="/Web" component={Web} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
            </div>
            <Footer />  
        </div>
        
      </Router>
    );
  }
}

export default App;
