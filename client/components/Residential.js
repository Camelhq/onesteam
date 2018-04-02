import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import GoogleApi from './GoogleApi';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import dogCarpet from "../imgs/dog-carpet.png"
import couch from "../imgs/couch.png"
import cleanedRoom from "../imgs/cleaned-room.png"
import cleanedTile from "../imgs/cleaned-tile.png"
import iICRC from "../imgs/IICRC-min.png"
import machine from "../imgs/machine-min.png"
import US from "../imgs/U-S.png"


const Residential = () => {
    const residentialBackground = {
      // margin: "auto",
      maxWidth: "100%",
      backgroundColor: "#f1f1f1"
    }
    const map = {
      margin: "auto",
      maxWidth: "900px",
      height: "300px",
      position: "relative",
      bottom: "20px"
      // top: "20px"
    }

    const back = {
      backgroundColor: "white",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
    const back2 = {
      backgroundColor: "white"
      // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }

    const residentialFont = {
      width: "350px",
      margin: "6px",
      fontSize: "20px",
      color: "#555555",
      // padding: "20px",
      lineHeight: "27px"
    }

    const responsiveImg = {
      width: "100%"
    }
    return(
    <div>
      <ScrollToTopOnMount/>
      <section class="residential-header" >
        <h1 class="large-font residential-title">Get your floors clean with onesteam</h1>
      </section>
      <section>
          <div class="residential-flex order-after">
            <div style={back}>
              <img style={responsiveImg} src={dogCarpet} />
            </div>
            <div style={back} >
            <div class="residentialDescription">
              <p  class="residentialFontTitle" >We are serious about cleaning</p>
              <p  class="residentialFont">
                We use environmentally friendly and green cleaning solutions, disinfectants,
                and deodorizers to ensure health and safety inside and outside your home.
              </p>
            </div>
          </div>
            </div>
      </section>
      <section>
      <div >
        <div  class="residential-flex order-before">
          <div  style={back}>
            <div class="residentialDescription">
              <p class="residentialFontTitle">Certifications and Techiques</p>
              <p class="residentialFont">All onesteam technicians are IICRC certified, ensuring that you receive the benefits of the newest
                and best cleaning techniques and technologies. Onesteam is a company that complies with
                rigorous business standards and ethics.</p>
            </div>
          </div>
          <div style={back}>
            <img style={responsiveImg} src={iICRC} />
          </div>
        </div>
      </div>
    </section>
    <section>
    <div class="">
      <div  class="residential-flex order-after">
        <div style={back}>
          <img style={responsiveImg} src={US} />
        </div>
        <div  style={back}>
          <div class="residentialDescription">
            <p class="residentialFontTitle">Years of Experience</p>
            <p class="residentialFont">For nearly 30 years, we've been providing Arizona and surrounding states with the best carpet and tile cleaning.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="">
      <div class="residential-flex order-before">
        <div  style={back}>
          <div class="residentialDescription">
            <p class="residentialFontTitle">Equipment</p>
            <p class="residentialFont">We use state-of-the-art truck mount equipment,
              hot water extraction technologies and techniques to get the job done right the first time.</p>
          </div>
        </div>
        <div style={back}>
          <img style={responsiveImg} src={machine} />
        </div>
      </div>
    </div>
  </section>

      <section>
        <div style={map}>
          <GoogleApi />
        </div>
      </section>
    </div>
  )
}


class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}


export default Residential
