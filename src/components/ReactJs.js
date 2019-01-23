import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import  '../css/linkPageStyle.scss';

export default class ReactJs extends Component {
  render() {
    return (
     <div className="container">
      <div className="page-box">
        <h4 >
          <span className="page-title">React Links</span>
        </h4>
        <div className="row">
          <div className="left-menu col-sm-3">
            <aside>
              <ul>
                <li>
                  <span>React-Router</span>
                </li>
                <li>
                  <span>State & Props</span>
                </li>
                <li>
                  <span>Life-Cycle Methods</span>
                </li>
                <li>
                  <span>Refs</span>
                </li>
                <li>
                  <span>Virtutal DOM</span>
                </li>
                <li>
                  <span>React Components</span>
                </li>
                <li>
                  <span>
                    <Link to="">React 16 Features</Link>
                  </span>
                </li>
              </ul>
            </aside>

          </div>
          <div className="right-content col-sm-8">
            <p>
              <h5>React-Router</h5>
              <hr/>
              <p style={{textAlign:"justify"}} >
              React Router is the standard routing library for React. 
              “React Router keeps your UI in sync with the URL. 
              It has a simple API with powerful features like lazy code loading, 
              dynamic route matching, and location transition handling built right in.
               Make the URL your first thought, not an after-thought.”
              </p>
              <p>
                <h6>Package Installation:</h6>
                <span style={{backgroundColor:"lightgrey",borderRadius:"5px",padding:"3px 3px"}}>
                npm install react-router-dom —-save
                </span>
              </p>
              <p>
                <h6><u>Links:</u></h6>
                <span>
                  <a href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf" target="_blank">
                  https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
                  </a>
                </span>
                <br/>
                  <a href="https://reacttraining.com/react-router/web/example/basic" target="_blank">
                  https://reacttraining.com/react-router/web/example/basic
                  </a>
                  
                
              </p>
              <Route path="" component="" />
            </p>
          </div>
        </div>
      <p style={{clear:"both"}}></p>
      </div>
    </div>
 
    )
  }
}
