import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <NavLink to="/" className="navbar-brand">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink to="/About" className="nav-item nav-link">About</NavLink>
      <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
      <NavLink to="/Service" className="nav-item nav-link" tabindex="-1" aria-disabled="true">Service</NavLink>
      <NavLink to="/Feedback" className="nav-item nav-link">Feedback</NavLink>
      
    </div>
  </div>
</nav>



    </div>
  );
}

export default Navbar;