import React from 'react';
import '../css/Nav.css'

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isResponsive: false
    };
  }

  toggleNavbar = () => {
    this.setState({ isResponsive: !this.state.isResponsive });
  };

  render() {
    return (
      <div className={`navbar ${this.state.isResponsive ? 'responsive' : ''}`}>
        <a href="/">Home</a>
        {/* <a href="about">About</a> */}
        <a href="projects">Projects</a>
        <a href="resume">My Resume</a>
        <a href="https://github.com/amekhail733?tab=repositories" target="_blank">My GitHub</a>
        {/* Hamburger icon */}
        <a className="icon" onClick={this.toggleNavbar}>&#9776;</a>
      </div>
    );
  }
}
export default Nav
