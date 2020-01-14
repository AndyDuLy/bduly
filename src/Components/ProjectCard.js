import React from 'react';
import '../Styles/App.css';
import '../Styles/skeleton.css';


export default function ProjectCard(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <img className="u-max-full-width" src={props.source} alt=""/>
            <p className="RalewayRegular"> 
              <span className="projectTitle"> {props.title} </span> 
              <br/> {props.description} 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
