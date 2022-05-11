
// import Newpropts from './component/Newpropts';
// const name= window.prompt("Enter your name");
// const age = window.prompt("Enter your age");
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Feedback from './Feedback';
import Emptypage from './Emptypage';
import Navbar from './component/Navbar';

function App() {

  // const time=8;

  // if (time<=12) {
  //   return(
  //     <h1>Hi, Good Afternoon.</h1>
  //   );
    
  // }
  // else{
  return (
    <>
    <Router>
      <Navbar/>
      <card/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="*" element={<Emptypage/>} />
      </Routes>
    </Router>
  {/* { <Newpropts name={"aarti"} day={"Friday"}/> 
   <Home/> } */}
    </>
 );
 }

export default App;
