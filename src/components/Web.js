import React, { Component } from 'react'
import '../css/Web.scss';
import {Link} from 'react-router-dom'


export default class Web extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div className="container">
        <div className="web">
          <h4>Web Development</h4>
          <p className="heading">JS Libraries</p>
          <ul>
            <li>
             <Link to={`${this.props.match.url}/React`}>React JS</Link>
            </li>
            <li>
             <Link to="/Web/React">Redux</Link>
            </li>
            <li>
             <Link to="/Web/React">JavaScript</Link>
            </li>
            
            <li>
             <Link to="/Web/React">Object Oriented JavaScript</Link>
            </li>
                    
          </ul>
          <p className="heading"> Markup Language</p>
          <ul>
          <li>
             <Link to="/Web/React">HTML 5</Link>
            </li>
            
          </ul>

          <p className="heading">Styling</p>
          <ul>
            <li>
             <Link to="/Web/React">CSS 3</Link>
            </li>
            
            <li>
             <Link to="/Web/React">Scss/Sass</Link>
            </li>
            <li>
             <Link to="/Web/React">Less</Link>
            </li>
            
          </ul>
        </div>

      </div>
    )
  }
}
