import React from 'react'
import {NavLink} from 'react-router-dom';

function Feedback() {
  return (
    <div> <h1> Write your Feedback here.</h1>
    <NavLink to="/">Back</NavLink>
    </div>
  );
}

export default Feedback;