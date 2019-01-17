import React from 'react';
import {Link} from 'react-router-dom'
import  '../css/Footer.scss';
import {instagram_logo,} from '../images/Index';

 const  Footer=()=> {
  return (
    <div className="footer">
      <div >
          <h5>StudyLinks</h5>
          <p>A website that help to get the all useful links related language <br/>
             so that professional find less hassel to get the details.
          </p>
          <span class="small">copyright &copy; 2019, All Rights reserved</span>
      </div>
      <div >
        <h5>Quick Links</h5>
          <ul style={{"list-style-type":"square","list-style-position":"outside","padding-inline-start":"25px"}}>
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
      <div >
        <div className="container">
          <h5>Follow us on</h5>
            <p>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <span>
                    <img src={instagram_logo} alt="instagram_logo" className="follow-img"/>
                </span>
            </p>
        </div>
      </div>
    </div>
  )
}
export default Footer;