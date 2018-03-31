import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const About = () => {
  return(
  <div>
    <section class="residential-header" >
      <h1 class="large-font residential-title">We are family owned and operated</h1>
    </section>
    <section class="about-us-intro" >
      <div>
       <h2 class="middle-font">OneSteam is a family owned business with over 30 years of experience in the cleaning and janitorial industry.
         We offer first class cleaning to anyone who needs our services.
         Our staff consists of highly skilled professionals who take great pride in customer satisfaction.</h2>
      </div>
      <div>
         {/* <img src="/client/imgs/onesteam-tools-image.png"/> */}
      </div>
    </section>
  </div>
  )
}

export default About
