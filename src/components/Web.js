import React, { Component } from 'react'
import '../css/Web.scss';
import {Link} from 'react-router-dom'


export default class Web extends Component {
  constructor(){
    super();
    this.state={
      data:[
        {
          topic:"JS Libraries",
          content:[{contentTitle:"React",path:"React"},
          {contentTitle:"Redux",path:"React"},
          {contentTitle:"JavaScript",path:"React"},
          {contentTitle:"Object Oriented JavaScript",path:"React"}
         ]
        },
        {
          topic:"Markup Language",
          content:[{contentTitle:"HTML5",path:"React"}]
        },
        {
          topic:"Styling",
          content:[
            {contentTitle:"Css3",path:"React"},
            {contentTitle:"Scss/Sass",path:"React"},
            {contentTitle:"Less",path:"React"}
          ]
        }
        
      ]
    }
  }


  render() {
    console.log(this.props.match);
    
    var pageContent=this.state.data.map((data)=>{
      return(<div>
                <p className="topics">{data.topic}</p>
                <ul> {data.content.map((content)=>{
                      return(
                        <li>
                          <Link to={`${this.props.match.url}/${content.path}`}>{content.contentTitle}</Link>
                        </li>
                      )
                  })}
                </ul>
                </div> 
              ) 
            }
        )
    return (
      <div className="container">
        <div className="page-box">
          <h4 >
            <span className="page-title">Web Development</span>
          </h4>
          {pageContent}

          
        </div>

      </div>
    )
  }
}

