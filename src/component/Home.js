import React from 'react';
import Card from './card';
// import {NavLink} from 'react-router-dom';

 function Home(){
    return(
        <>
    <h1> Hello, Good Morning.</h1>
  {/* <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  <NavLink to="/service">Service</NavLink>
  <NavLink to="/feedback">Feedback</NavLink> */}
   <Card/>

    </>

    )
}

export default Home;