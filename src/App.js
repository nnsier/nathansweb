import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Work from './Components/Work/Work';

const App = props => (
  <Router>
    <body className="container">
      <header>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <main className="siteContent">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/about' component={About} />
      </main>
      <footer>
      <ul>
        <li><a href="https://github.com/nathSierra"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/nathan-sierra-64752416b/"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
      </footer>
    </body>
  </Router>
    
)

export default App;
