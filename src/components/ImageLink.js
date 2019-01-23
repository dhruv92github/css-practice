import React from 'react'
import {Link} from 'react-router-dom'

const ImageLink=(props)=>{
    return(
        <Link to={props.to}>
           <abbr title={props.abbrTitle}>
              <img src={props.src} alt={props.src} />
            </abbr>
        </Link> 
    )
}

export default ImageLink;
