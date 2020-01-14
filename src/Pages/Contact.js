import React from 'react';
import '../Styles/App.css';
import '../Styles/skeleton.css';


export default function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <h1 align="center" className="RalewayRegular topPadding" id="portfolio"> Contact </h1>

        <form>
          <div className="row topPadding">
            <div className="six columns">
              <label for="fnameInput"> First Name </label>
              <input class="u-full-width" type="text" placeholder="John" id="fnameInput"/>
            </div>

            <div className="six columns">
              <label for="lnameInput"> Last Name </label>
              <input class="u-full-width" type="text" placeholder="Doe" id="lnameInput"/>
            </div>
          </div>

          <div className="row">
            <div className="six columns">
              <label for="emailInput"> Email </label>
              <input class="u-full-width" type="email" placeholder="email@email.com" id="emailInput"/>
            </div>

            <div className="six columns">
              <label for="phoneInput"> Phone Number </label>
              <input class="u-full-width" type="number" placeholder="(123) 456-789" id="phoneInput"/>
            </div>
          </div>
          
          <div className="row">
            <div className="twelve columns">
              <label for="messageInput"> Message </label>
              <textarea class="u-full-width" placeholder="Message …" id="messageInput"></textarea>
            </div>
          </div>

          <div className="row">
            <div className="six columns">
              <input class="button-primary" type="submit" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
