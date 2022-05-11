import React from 'react'
import {NavLink} from 'react-router-dom'
function Service() {
  return (

    <div>
        <h1>Service information read.</h1>
         <NavLink to="/">Back</NavLink> &nbsp;
         <NavLink to="/feedback">Feedback</NavLink>
    </div>
  );
}

export default Service;