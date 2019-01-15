import React from 'react';
import {Link} from 'react-router-dom'

 const  Footer=()=> {
  return (
    <div className="row footer">
      <div className="col-sm-4">
        <h5>StudyLinks</h5>
        <p>A website that help to get the all useful links related language 
            so that professional find less hassel to get the details
        </p>
        <span class="small">copyright &copy; 2019, All Rights reserved</span>
      </div>
      <div className="col-sm-4">
      <h5>Quick Links</h5>
        <ul style={{"list-style-type":"square"}}>
            <li>
            <Link to="/Contact" class="links">Contact Us</Link>  
            </li>
            <li>
            <Link to="/About" class="links">About Us</Link>    
            </li>
            <li>
            <Link to="#" class="links">Terms and Policies</Link>    
            </li>
        </ul>
      </div>
      <div className="col-sm-4">
      <h5>Follow us on</h5>
        <p>A website that help to get the all useful links related language 
            so that professional find less hassel to get the details
        </p>
      </div>
    </div>
  )
}
export default Footer;