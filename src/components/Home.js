import React, { Component } from 'react';
import {javascript_logo,HTML5_logo,css3} from '../images/Index';


export default class Home extends Component {
  render() {
    return (
      <div>
        
        <div className="lang-images">
            <img src={HTML5_logo} alt="HTML5_logo" className="rounded"/>
            <img src={css3} alt="css3" />
            <img src={javascript_logo} alt="javascript_logo" />
            
        </div>
        <h2>Get the best links for your favourite Language</h2>
        <div className="jumbotron">
            <h3>Web Development</h3>
            <div className="row">
                <div className="col">
                    <p>React JS</p>
                </div>
                <div className="col">
                    <p>JavaScript</p>
                </div>
                <div className="col">
                    <p>HTML 5</p>
                </div>
                <div className="col">
                    <p>CSS 3</p>
                </div>
            </div>
            
        </div>
        <br />
        <div className="jumbotron">
            <h3>Database</h3>
            <ul className="web-list">
                <li>MySQL</li>
                <li>SQL</li>
                <li>PL-SQL</li>
                
            </ul>
        </div>
        
      </div>
    )
  }
}
