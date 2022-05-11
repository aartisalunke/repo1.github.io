import React from 'react'
import {NavLink} from 'react-router-dom'
function contact() {
  return (
    <div>
      <h2>Contact here for enquiry. </h2>
      <NavLink to="/">Back</NavLink> &nbsp;
      <NavLink to="/service">Services</NavLink>
    </div>

  );
}

export default contact;