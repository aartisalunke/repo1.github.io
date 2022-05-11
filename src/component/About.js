import React from 'react'
import {NavLink} from 'react-router-dom'
function About() {
  return (
    <div>
        <h2>This is about page.</h2>
    <NavLink to="/">Backward</NavLink> &nbsp;
    <NavLink to="/contact">forward</NavLink>
    </div>
  );
}

export default About;