import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link 
          activeClass='active' 
          to='intro' 
          spy={true} 
          hashSpy={true}
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link 
          activeClass='active' 
          to='about' 
          spy={true} 
          smooth={true}
          hashSpy={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Graphs
        </Link>
        <Link 
          activeClass='active' 
          to='goals' 
          spy={true} 
          smooth={true}
          hashSpy={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Goals
        </Link>
        <Link 
          activeClass='active' 
          to='projects' 
          spy={true} 
          smooth={true} 
          hashSpy={true}
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Leaderboards
        </Link>
      </div>
      <div className="authButtons">
        <button className="authBtn">Login | Register</button>
      </div>
    </nav>
  );
};

export default Navbar;