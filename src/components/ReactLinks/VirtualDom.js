import React from 'react'

const VirtualDom = () => {
  return (
    <article>
              <h2 className="link-content-heading">Virtual DOM</h2>
              <hr/>
              <p>
                Virtual DOM is in-memory representation of Real DOM. 
                It is lightweight JavaScript object which is copy of Real DOM.
                Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. 
                Creating a whole tree is very fast so it does not affect the performance. At any given time, 
                ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and
                other with the previous state Virtual DOM.
              </p>
              
              <p>
                <h6><u>Links:</u></h6>
                <span>
                  <a href="http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/" target="_blank">
                  http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
                  </a>
                </span>
                <br/>
                  <a href="https://www.codecademy.com/articles/react-virtual-dom" target="_blank">
                  https://www.codecademy.com/articles/react-virtual-dom
                  </a>
                  
                
              </p>
              
              </article>
      
  )
}

export default VirtualDom
