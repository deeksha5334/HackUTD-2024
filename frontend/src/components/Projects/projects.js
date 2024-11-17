import React from 'react';
import './projects.css';
import ProjectItem from '../projectItem';
import HealthEquityPlus from '../../assets/HealthEquityPlus.png';
import ComputerNetwork from '../../assets/ComputerNetwork.png';
import TrackCam from '../../assets/cam.png';
import zuul from '../../assets/zuul.png';

function Projects() {
  return (
    <section id="projects">
      <span className="projectsTitle">My Projects</span>
      <div className="ProjectList">
        <a href= "https://healthequityplus.net" target="" rel="noopener noreferrer">
          <ProjectItem name="HealthEquityPlus Website" image={HealthEquityPlus} />
        </a>
        <a href="https://github.com/aadhi-sivakumar/CS2336/tree/main/Project2" target="" rel="noopener noreferrer">
          <ProjectItem name="Computer Network Simulator" image={ComputerNetwork} />
        </a>
        <a href="https://github.com/aadhi-sivakumar/SplitTrack" target="" rel="noopener noreferrer">
          <ProjectItem name="TrackCam" image={TrackCam} />
        </a>
        <a href="https://github.com/aadhi-sivakumar/CS162/tree/main/zuul" target="" rel="">
          <ProjectItem name="ZUUL: School Edition" image={zuul} />
        </a>
      </div>
    </section>
  );
}

export default Projects;
