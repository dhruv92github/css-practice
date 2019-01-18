import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ReactJs extends Component {
  render() {
    return (
     <div className="container">
      <div className="page-box">
      <h4 >
          <span className="page-title">React Links</span>
        </h4>
        <p className="topics">React-Router</p>
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
        <p className="topics">Life-Cycle Methods</p>
        <ul>
        <li>
           <Link to="/Web/React">HTML 5</Link>
          </li>
          
        </ul>

        <p className="topics">Styling</p>
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
