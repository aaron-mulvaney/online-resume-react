import React from 'react';
import './Main.css';
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function Main() {
  return (
    <div className="Main">
      <div class="wrapper">
        <HashRouter>
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Aaron Mulvaney</h3>
            </div>
            <ul className="list-unstyled components">
              <p>Curriculum Vitae</p>
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
            </ul>
            <ul class="list-unstyled CTAs">
              <li>
                <a href="https://github.com/aaron-mulvaney/CV/archive/master.zip" class="download">Download my CV</a>
              </li>
            </ul>
          </nav>
        </HashRouter>
        <HashRouter>
          <div id="content">
              <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
              </button>
            <Route path="/profile" component={Profile} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default Main;
