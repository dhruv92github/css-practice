import React from 'react'

const Refs = () => {
  return (
    <article>
              <h2 className="link-content-heading">Refs</h2>
              <hr/>
              <p>
                The ref is used to return a reference to the element.
                refs are used to get reference to a DOM(Document Object Model) node or an instance of a component in a React Application i.e. refs would return the node we are referencing.
                If the ref points to a standard component (DOM node, such as input, select, div etc) then to retrieve the element; you just need to call this.refs.ref.
                If the ref points to a composite component (a custom component you have created yourself) you need to use the new ReactDOM module like so ReactDOM.findDOMNode(this.refs.ref).
              </p>
              
              <p>
                <h6><u>Links:</u></h6>
                <span>
                  <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">
                  https://reactjs.org/docs/refs-and-the-dom.html
                  </a>
                </span>
                <br/>
                  <a href="https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81" target="_blank">
                  https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
                  </a>
              </p>
              
              </article>
      
  )
}

export default Refs
