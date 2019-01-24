import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import  '../css/linkPageStyle.scss';
import ReactRouter from './ReactLinks/ReactRouter';
import StateProps from './ReactLinks/StateProps';
import LifecycleMethods from './ReactLinks/LifecycleMethods';
import Refs from './ReactLinks/Refs';
import VirtualDom from './ReactLinks/VirtualDom';
import React16 from './ReactLinks/React16';

export default class ReactJs extends Component {
  render() {
    console.log(this.props.match.url);
    const reactURL=this.props.match.url;
    return (
     <div className="container">
      <div className="page-box">
        <h1 className="link-page-heading">
          <span className="page-title">React Links</span>
        </h1>
        <div className="row">
          <div className="left-menu col-sm-3">
            <aside>
              <ul>
                <li>
                  <Link to={`${reactURL}/react-router`}>
                    <span>React-Router</span>
                  </Link>
                </li>
                <li>
                  <Link to={`${reactURL}/state-props`}>
                    <span>State & Props</span>
                  </Link>
                  
                </li>
                <li>
                  <Link to={`${reactURL}/lifecycle-methods`}>
                    <span>Life-Cycle Methods</span>
                  </Link>
                  
                </li>
                <li>
                  <Link to={`${reactURL}/refs`}>
                    <span>Refs</span>
                  </Link>
                  
                </li>
                <li>
                  <Link to={`${reactURL}/virtual-dom`}>
                    <span>Virtutal DOM</span>
                  </Link>
                </li>
                  
                 
                <li>
                  <Link to={`${reactURL}/react-components`}>
                    <span>React Components</span>
                  </Link>
                 
                </li>
                <li>
                  <Link to={`${reactURL}/react16`}>
                    <span>React 16 Features</span>
                  </Link>
            
                </li>
              </ul>
            </aside>

          </div>
          <div className="right-content col-sm-8">
           
          <Route path={`${reactURL}/react-router`} component={ReactRouter} />
          <Route path={`${reactURL}/state-props`} component={StateProps} />
          <Route path={`${reactURL}/lifecycle-methods`} component={LifecycleMethods} />
          <Route path={`${reactURL}/refs`} component={Refs} />
          <Route path={`${reactURL}/virtual-dom`} component={VirtualDom} />
          <Route path={`${reactURL}/react16`} component={React16} /> 
          </div>
        </div>
      <p style={{clear:"both"}}></p>
      </div>
    </div>
 
    )
  }
}
