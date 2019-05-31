import React, { Component } from "react";
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <div id="exp_container">
        <h1>Experiences</h1>
        <hr id="tophr"></hr>
        <div class="experiences">
          <div class="experience row">
            <div class="col-sm-4">
              <h2 class="exp_h2">Education</h2>
            </div>
          </div>
          <div class="experience row">
            <div class="col-md-4">
              <h4 class="exp_headings">Technology University Dublin</h4>
              <p>2014 - 2018 - First Class Honours</p>
            </div>
            <div class="col-md-8">
              <h5 class="exp_title">Bachelor - Computer Science (Sepcialization: Software Development)</h5>
              <p>This degree was heavily based on OOP programming, using languages such as Java, C++, C#.
                I learned a lot about functional programming, Web/Mobile Development, Data Analysis and Databases. My studies also involved learning about Agile Methodologies, Industry best practices, Algorithms, Cloud Services and Distrubued Computing.
            </p>
            </div>
          </div>
          <hr></hr>
          <div class="experience row">
            <div class="col-md-4">
              <h2 class="exp_h2">Careers</h2>
            </div>
          </div>
          <div class="experience row">
            <div class="col-md-4">
              <h4 class="exp_headings">Houghton Mifflin Harcourt</h4>
              <p>March 2019 - Present</p>
            </div>
            <div class="col-md-8">
              <h5 class="exp_title">Application Support Engineer</h5>
              <p>

              </p>
            </div>
          </div>
          <div class="experience row">
            <div class="col-md-4">
              <h4 class="exp_headings">Version 1</h4>
              <p>June 2018 - March 2019</p>
            </div>
            <div class="col-md-8">
              <h5 class="exp_title">Associate Consultant</h5>
              <p>
                Working under Managed Services Practice, maintaining existing customer Middleware (XSLT) systems. Creating XML maps to work with XSD schemas to transform incoming messages into new formats required by the customer.
            </p>
            </div>
          </div>
          <div class="experience row">
            <div class="col-md-4">
              <h4 class="exp_headings">Halfords</h4>
              <p>June 2014 - June 2018</p>
            </div>
            <div class="col-md-8">
              <h5 class="exp_title">Sales Advisor (Car Technology)</h5>
              <p>
                My role in Halfords consisted of a multitude of responsibilities:
                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      <li>Excellent Customer Service</li>
                      <li>Re-Merchandising</li>
                      <li>Baby seat demonstrations</li>
                      <li>Ticketing</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      <li>High Sales Rates (VAS, KPI’s)</li>
                      <li>In Car Technology installations</li>
                      <li>Stock Count</li>
                      <li>Maintain safe and clean environment</li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div class="experience row">
            <div class="col-md-4">
              <h4 class="exp_headings">Openet</h4>
              <p>February 2017 - July 2017</p>
            </div>
            <div class="col-md-8">
              <h5 class="exp_title">Software Engineer</h5>
              <p>
              My internship with Openet was my first exposure with large scale business applications, both implemented and in development. 
              In an Agile environment my team worked to deliver bespoke functionality on existing products for customers. 
              We used Kanban methodology with the use of JIRA to maintain tasks on each project. E2E testing was necessary to ensure the added functionality performed as expected.
              </p>
            </div>
          </div>
          <hr></hr>
          <div class="experience row">
            <div class="col-md-4">
              <h2 class="exp_h2">Volunteering / Leadership</h2>
            </div>
            <div class="col-md-8">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Experience;