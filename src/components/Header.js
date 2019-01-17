import React from 'react'
import '../css/header.scss';
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div class="sticky-header">
      <header>
            
            <nav class="navigation container">
              <h2 id="brand-1">Study<span id="brand-2">Links</span> </h2>
              <ul className="header-list-style">
                <li className="list"> 
                <Link to="/" class="links">Home</Link>
                </li>
                <li className="list">
                  <Link to="/Web" class="links">Web Development</Link>
                </li>
                <li className="list">
                  <Link to="/Contact" class="links">Contact</Link>
                </li>
                <li className="list">
                  <Link to="/About" class="links">About</Link>
                </li>
              </ul>
              
              </nav>
            
          </header>
          
    </div>
  )
}
