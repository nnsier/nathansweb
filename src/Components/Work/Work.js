import React from 'react';

const Work = () => (
  <div>
    <h2>Resume</h2>
    <p>I graduated from Southern Illinois University Edwardsville in 2015.</p>
    <p>While in university I worked for my school newspaper, the Alestle, as an editor.</p>
    <p>I worked at a coffee shop called Sacred Grounds for a year,</p>
    <p>after that I found myself working seasonal jobs for a while.</p>
    <p>I also worked as an English teacher in Brno for a little bit.</p>
    <p>In late 2017 I moved to Atlanta with my girlfriend Jessica whom I met while working in Glacier National Park as a bellman.</p>
    <p>2018 and 2019 found me working in Decatur at Ford Fry restaurant No.246 until I started my web development class.</p>
    <p>As an aside: Check out some of my work on Github! When I'm particularly fond of schoolwork I've done I'll post it here, too.</p>
    <h3>Works I'm mildly proud of:</h3>
    <ul>
      <li>
        <h4>
          <a href="https://pacific-river-83712.herokuapp.com/">
            <i className="far fa-sticky-note"></i> Kudos
          </a>
        </h4>
        <p>This is a (very small) full stack application where you can create notes for users. It uses MongoDB as the database hosted by MongoDB Atlas, while the server and front end is hosted by Heroku. </p>
      </li>  
    </ul>
  </div>
)

export default Work;