import React, { Component } from 'react';
import {javascript_logo,
    HTML5_logo,css3,
    react_logo,redux_logo,
bootstrap_logo,SQL_logo,scss_logo,less_logo} from '../images/Index';
import '../css/Home.scss';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="lang-images">
            
                <img src={HTML5_logo} alt="HTML5_logo" className="rounded"/>
                <img src={css3} alt="css3" />
                <img src={javascript_logo} alt="javascript_logo" />
                <img src={react_logo} alt="react_logo" className="rounded"/>
                <img src={redux_logo} alt="redux_logo" />
                <img src={bootstrap_logo} alt="bootstrap_logo" />
                <img src={SQL_logo} alt="SQL_logo" />
                <img src={scss_logo} alt="scss_logo" />
                <img src={less_logo} alt="less_logo" />
            
            <div>
            <h4>Get the best links for your favourite Language</h4>
        </div>
        </div>
        <div className="stream-box">
            <p className="heading">Web Development</p>
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
                <div className="col">
                    <p>Bootstrap</p>
                </div>
                <div className="col">
                    <p>Less</p>
                </div>
                <div className="col">
                    <p>Scss</p>
                </div>
            </div>
            
        </div>
        
        <div className="stream-box">
        <p className="heading">Database</p>
            <div className="row">
                <div className="col">
                    <p>MySQL</p>
                </div>
                <div className="col">
                    <p>SQL</p>
                </div>
                <div className="col">
                    <p>PL-SQL</p>
                </div>
                
            </div>
        </div>
        
      </div>
    )
  }
}
