import React from 'react'

const StateProps = () => {
  return (
    <article>
              <h2 className="link-content-heading">States & Props</h2>
              <hr/>
              <p>
                State:<br/>
                State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button, 
                typing some text, pressing some key, etc.
                React.Component is the base class for all class based ReactJS components. Whenever a class inherits the class React.
                Component it’s constructor will automatically assigns attribute state to the class with initial value is set to null. 
                we can change it by overriding the method constructor.
                In many cases we need to update the state. To do that we have to use the method setState.
                The state is a data structure that starts with a default value when a Component mounts. 
                It may be mutated across time, mostly as a result of user events.
              </p>
              <p>
                Props:<br/>
                This simply is shorthand for properties. Props are how components talk to each other.
                Props are immutable (fancy word for it not changing)
                They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. 
                Props do not have to just be data,callback functions may be passed in as props
              </p>
              
              <p>
                <h6><u>Links:</u></h6>
                <span>State</span><br/>
                <span>
                  <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank">
                  https://reactjs.org/docs/state-and-lifecycle.html
                  </a>
                </span>
                <br/>
                <span>Props</span><br/>
                  <a href="https://reactjs.org/docs/components-and-props.html" target="_blank">
                  https://reactjs.org/docs/components-and-props.html
                  </a>
              </p>
              
              </article>
       
  )
}

export default StateProps;
