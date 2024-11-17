import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';

function Intro() 
{
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I am <span className="introName">Aadhi Sivakumar</span><br />Aspiring Software Engineer</span>
            <p className="introPara"> I'm a skilled full-stack developer with experience in creating visually<br /> appealing and user-freiendly websites. I am also a machine learning<br />researcher studying methods to detect computer network intrusions.</p>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro

