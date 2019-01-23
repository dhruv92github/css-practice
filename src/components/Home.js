import React, { Component } from 'react';
import {javascript_logo,
    HTML5_logo,css3,
    react_logo,redux_logo,
    bootstrap_logo,SQL_logo,
    scss_logo,less_logo} from '../images/Index';
import '../css/Home.scss';
import {Link} from 'react-router-dom';
import ImageLink from './ImageLink';

export default class Home extends Component {
  render() {
      console.log(this.props.match);
    return (
      <div className="home">
        <div className="lang-images">
            <ImageLink src={HTML5_logo} to="/Web/React" abbrTitle="HTML5" />
            <ImageLink src={css3} to="/Web/React" abbrTitle="css3" />
            <ImageLink src={javascript_logo} to="/Web/React" abbrTitle="javascript" /> 
            <ImageLink src={react_logo} to="/Web/React" abbrTitle="ReactJs"  />
            <ImageLink src={redux_logo} to="/Web/React" abbrTitle="redux" />
            <ImageLink src={bootstrap_logo} to="/Web/React" abbrTitle="bootstrap" />
            <ImageLink src={SQL_logo} to="/Web/React" abbrTitle="SQL" />
            <ImageLink src={scss_logo} to="/Web/React" abbrTitle="scss" />
            <ImageLink src={less_logo} to="/Web/React" abbrTitle="less" />
        <div>
            <h4>Get the best links for your favourite Language</h4>
        </div>
        </div>
        <div className="stream-box">
            <p className="heading">Web Development</p>
            <div className="row">
                <div className="col">
                    <p>
                      <Link to="/Web/React">React JS</Link>      
                    </p>
                </div>
                <div className="col">
                    <p>
                    <Link to="/Web/React">JavaScript</Link> 
                    </p>
                </div>
                <div className="col">
                    <p>
                    <Link to="/Web/React">HTML 5</Link> 
                    </p>
                    
                </div>
                <div className="col">
                <p>
                    <Link to="/Web/React">CSS 3</Link> 
                    </p>
                    
                </div>
                <div className="col">
                    <p>
                    <Link to="/Web/React">Bootstrap</Link> 
                    </p>
                   
                </div>
                <div className="col">
                <p>
                    <Link to="/Web/React">Less</Link> 
                    </p>
                  
                </div>
                <div className="col">
                    <p>
                    <Link to="/Web/React">Scss</Link> 
                    </p>
                   
                </div>
            </div>
            
        </div>
        
        <div className="stream-box">
        <p className="heading">Database</p>
            <div className="row">
                <div className="col">
                    
                    <p>
                    <Link to="/Web/React">MySQL</Link> 
                    </p>
                </div>
                <div className="col">
                    
                    <p>
                    <Link to="/Web/React">SQL</Link> 
                    </p>
                </div>
                <div className="col">
                    
                    <p>
                    <Link to="/Web/React">PL-SQL</Link> 
                    </p>
                </div>
                
            </div>
        </div>
        
      </div>
    )
  }
}

