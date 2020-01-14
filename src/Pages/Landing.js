import React from 'react';
import ResponsiveNav from '../Components/ResponsiveNav';
import Placeholder from '../Images/1080Placeholder.png';
import '../Styles/App.css';
import '../Styles/skeleton.css';


export default function Navbar() {
  return (
    <>
      <ResponsiveNav/>

      <div className="container">
        <h1 align="center" className="RalewayRegular topPadding" id="about"> About </h1>

        <div className="row topPadding">
          {/* Left Section */}
          <div className="four columns">
            <h3 align="center" className="RalewayRegular"> Section 1 </h3>

            <p align="center" className="RalewayRegular"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Nulla tellus nunc, tristique a neque quis, finibus 
              convallis ligula. Nunc malesuada odio sed dolor 
              luctus, sed pharetra tortor molestie. Etiam cursus
              nibh eu elementum vehicula. Curabitur ac tempor 
              mauris. Integer lobortis vitae lectus elementum 
              viverra. Suspendisse in blandit massa, non tristique 
              dui. Vivamus sed nisi quam. Pellentesque sit amet 
              elit cursus, fermentum enim id, elementum tortor. 
            </p>
          </div>

          {/* Middle Section */}
          <div className="four columns">
            <img
              className="u-max-full-width"
              src={Placeholder}
              alt=""
            />
          </div>

          {/* Right Section */}
          <div className="four columns">
            <h3 align="center" className="RalewayRegular"> Section 2 </h3>

            <p align="center" className="RalewayRegular"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Nulla tellus nunc, tristique a neque quis, finibus 
              convallis ligula. Nunc malesuada odio sed dolor 
              luctus, sed pharetra tortor molestie. Etiam cursus
              nibh eu elementum vehicula. Curabitur ac tempor 
              mauris. Integer lobortis vitae lectus elementum 
              viverra. Suspendisse in blandit massa, non tristique 
              dui. Vivamus sed nisi quam. Pellentesque sit amet 
              elit cursus, fermentum enim id, elementum tortor. 
            </p>
          </div>
        </div>

        <div className="row topPadding">
          <div className="three columns">
            <a className="hyperlinkStyling" target="_blank" rel="noopener noreference" href="/"> <p align="center" className="RalewayRegular"> Link 1 </p> </a>
          </div>
          <div className="three columns">
            <a className="hyperlinkStyling" target="_blank" rel="noopener noreference" href="/"> <p align="center" className="RalewayRegular"> Link 2 </p> </a>
          </div>
          <div className="three columns">
            <a className="hyperlinkStyling" target="_blank" rel="noopener noreference" href="/"> <p align="center" className="RalewayRegular"> Link 3 </p> </a>
          </div>
          <div className="three columns">
            <a className="hyperlinkStyling" target="_blank" rel="noopener noreference" href="/"> <p align="center" className="RalewayRegular"> Link 4 </p> </a>
          </div>
        </div>
      </div>
    </>
  )
}
