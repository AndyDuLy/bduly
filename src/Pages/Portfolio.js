import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import Placeholder from '../Images/1080Placeholder.png';
import '../Styles/App.css';
import '../Styles/skeleton.css';


export default function Portfolio() {
  return (
    <>
      <div className="container">
        <h1 align="center" className="RalewayRegular topPadding" id="portfolio"> Portfolio </h1>

        {/* Project Row One */}
        <div className="row topPadding">
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
        </div>

        {/* Project Row Two */}
        <div className="row topPadding">
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
          <div className="four columns">
            <ProjectCard source={Placeholder} title="Project Title" description="Project Description"/>
          </div>
        </div>
      </div>
    </>
  )
}
