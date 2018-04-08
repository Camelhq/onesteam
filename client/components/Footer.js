import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Logo from "../imgs/onesteam-Logo.svg"

const Footer = () => {
  const white = {
    color: "white"
  }
  const spacing = {
    paddingTop: "5px",
    paddingBottom: "5px"
  }
  const logo = {
    width: "120px",
    height: "45px"
  }
  return(
    <div>
      <section class="footer">
        <div class="top-footer-container commerical-order-after" style={white}>
          <div class="padding-footer flex-element">
          <img style={logo} src={Logo} />
          </div>
          <div class="padding-footer flex-element">
            <div class="small-font">One Steam is licensed, bonded, and insured.</div>
          </div>
          <div class="padding-footer flex-element">
            <button class="commerical-button"><a href="mailto:lucky@cleanwithone.com?Subject=Hello" target="_top" class="small-font">Send Mail</a>
          </button>
          </div>
        </div>
      </section>

    <section class="footer" style={white} >
      <div class="footer-container responsive-padding commerical-order-after" >
        <div class="padding-footer flex-element">
          <div class="footer-padding small-font">Business Hours</div>
          <div class="footer-padding">
            <div style={spacing}>M - F</div>
            <div style={spacing}>9am to 5pm</div>
            <div style={spacing}>Weekends</div>
            <div style={spacing}>8am to 1pm</div>
          </div>
        </div>
        <div class=" padding-footer flex-element">
          <div class="footer-padding small-font">Contact</div>
          <div class="footer-padding">
            onesteam Headquarters
            602-892-0302
            support@onesteam.com
          </div>
        </div>
        <div class=" padding-footer flex-element">
          <h1 class="footer-padding small-font">Location</h1>
          <div class="footer-padding">
            110 W Orion St. Ste. 137 | Tempe AZ | 85283
          </div>
        </div>
      </div>
      <div class="negative-footer-padding padding-footer">© 2018 onesteam.com All Rights Reserved.</div>
    </section>
  </div>
  )
}

export default Footer
