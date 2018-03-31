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
        <h1 class="large-font residential-title">We are a full-service commercial & residential cleaning specialist</h1>
      </section>
      <section>
          <div class="residential-flex order-after">
            <div style={back}>
              <img style={responsiveImg} src={dogCarpet} />
            </div>
            <div style={back} >
            <div class="residentialDescription">
              <p  class="residentialFontTitle" >We treat cleaning serious</p>
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
              <p class="residentialFontTitle">Techiques and technologies</p>
              <p class="residentialFont">One Steam expertise is IICRC certified, ensuring that you receive the benefits of the newest
                and best cleaning techniques and technologies in the industry and that you are hiring a company that complies with
                rigorous business standards and ethics.</p>
            </div>
          </div>
          <div style={back}>
            <img style={responsiveImg} src={couch} />
          </div>
        </div>
      </div>
    </section>
    <section>
    <div class="">
      <div  class="residential-flex order-after">
        <div style={back}>
          <img style={responsiveImg} src={cleanedRoom} />
        </div>
        <div  style={back}>
          <div class="residentialDescription">
            <p class="residentialFontTitle">Years of Experience</p>
            <p class="residentialFont">We have been providing Arizona with the best carpet cleaning and related services for nearly 30 years.</p>
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
            <p class="residentialFontTitle">Tile</p>
            <p class="residentialFont">Equipment: We use state-of-the-art equipment, technologies, and techniques.</p>
          </div>
        </div>
        <div style={back}>
          <img style={responsiveImg} src={cleanedTile} />
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
