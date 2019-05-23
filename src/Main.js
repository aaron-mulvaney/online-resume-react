import React from 'react';
import './Main.css';
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import IH from "./I&H";
import Contact from "./Contact";


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
              <li><NavLink to="/h&a">Honours & Achievements</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/i&h">Interests & Hobbies</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <ul class="list-unstyled CTAs">
              <li>
                <a href="https://drive.google.com/open?id=1CLTEP5eachGDxkui85H2Gb2bXpIHSePh" class="download">Download my CV</a>
              </li>
            </ul>
          </nav>
        </HashRouter>
        <HashRouter>
          <div id="content">
            <div id="navbtn">
              <button id="nav-button" type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
              </button>
            </div>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/h&a" component={Education} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/i&h" component={IH} />
            <Route exact path="/contact" component={Contact} />

          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default Main;
