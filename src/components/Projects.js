import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='project'>
        <h3>Project 1</h3>
        <p>
          Description of project 1. This could be a web application, a mobile
          app, or anything else you've worked on.
        </p>
      </div>
      <div className='project'>
        <h3>Project 2</h3>
        <p>
          Description of project 2. Showcase your skills and the technologies
          you used.
        </p>
      </div>
    </section>
  );
}

export default Projects;
