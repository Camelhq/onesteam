import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


// import commerical from "../imgs/commerical-header.png"
import theaterChair from "../imgs/theater-chair.png"
import smallAuditorium from "../imgs/small-auditorium.png"

const Commerical = () => {
  // console.log(Button)
  const response = {
    width: "100%"
  }
  const quote = {
    width: "500px",
    height: "300px"
  }
  const slideOne = {
    width: "450px",
    height: "300px",
    backgroundColor: "green"
  }
  const slideTwo = {
    width: "450px",
    backgroundColor: "red",
    marginTop: "20px"
  }
  const flexBox = {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1230px",
    height: "500px",
    margin: "0 auto",
    paddingBottom: "100px"
  }
  const flexBoxBox = {
    height: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }

  const commericalTitle = {
    marginTop: "10px",
    marginBottom: "10px"
    // backgroundColor: "#f1f1f1"
  }
  return(
    <div>
      <ScrollToTopOnMount/>
      <section class="call-to-action-commerical" >
        <div class="call-to-action-home">
          <h1 class="cashing large-font home-title">We have the space. We have the team.</h1>
          {/* <div class="cashing large-font home-title">
            https://dribbble.com/shots/1813486-Invoice-Sherpa-New-Feature
            Address: <input  class="blue-button" name="Address" type="address" placeholder="type address" value="submit" />
          </div> */}
        </div>
      </section>
      <section class="description-commerical-intro">
        <div class="commerical-theatre-img">
          {/* <img src="/client/imgs/front-entrance.png" /> */}
          <div class="size">
            <div class="commerical-circle">
              <div class="commerical-page-description">
                <div class="business-number-font">50+</div>
                <div class="business-number-description">Businesses trust One Steam</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="">
          <div class=" responsive-padding commerical-flex-container commerical-order-before">
            <div class="mobile-padding flex-element">
              <div style={commericalTitle} class="commerical-line-spacing-title">
                <h1 class="middle-font">We specialized in bathrooms and large floor plans.</h1>
              </div>
              <div>
                <h1 class="small-font commerical-line-spacing">Your customers will rate their experience based on the cleanliness and smell of your restrooms and carpet.
                  Be sure to cast a commercial cleaning service that understands the importance of a clean, odor-free rooms and its impact on your business.</h1>
              </div>
            </div>

            <div class="mobile-padding flex-element">
              <img style={response} src={theaterChair}/>
            </div>
          </div>
      </section>
      {/* <section style={flexBox}>
        <div style={flexBoxBox}>
          <div style={slideOne}>
            <div>This is text one</div>
          </div>
          <div style={slideTwo}>
            <div class="small-font">TNec eu dolorum facilisi, an velit utinam oblique nam. Ei mel sonet forensibus. Meis magna platonem ne eum.
             Eu vis ullum tantas suscipiantur, dicit constituto consequuntur vis an. Ei per congue nostrud scriptorem, tempor</div>
           </div>
        </div>
        <div style={flexBoxBox}>
          <div style={slideOne}>This is text one</div>
          <div style={slideTwo}>
            <div class="small-font">TNec eu dolorum facilisi, an velit utinam oblique nam. Ei mel sonet forensibus. Meis magna platonem ne eum.
             Eu vis ullum tantas suscipiantur, dicit constituto consequuntur vis an. Ei per congue nostrud scriptorem, tempor</div>
           </div>
        </div>
      </section> */}
      <section class="responsive-padding commerical-flex-container commerical-order-after">
          <div class="mobile-padding flex-element">
            <img style={response} src={smallAuditorium}/>
          </div>
          <div class="mobile-padding flex-element">
            <div style={commericalTitle}>
              <h1 class="middle-font">Auditorium and Theaters</h1>
            </div>
              <div>
              <h2 class="small-font commerical-line-spacing">Butter, salt, sodas, candy, sticky fingers and foot traffic can damage carpeting and upholstered seats.
              Any fabric-covered surface in your auditorium should be cleaned regularly to remove built-up soil, spots, stains and other messes.
              Low-moisture encapsulation cleans thoroughly and dries fast so carpets and seats are ready for use when your doors open for business.</h2>
            </div>
            <div class="commerical-action-button-spacing">
           <div class="commerical-action-button">
             <div class="onesteam-margin-button">Contact Us</div>
           </div>
          </div>
         </div>
      </section>
      {/* <section style={signUp}>
        <div>sign up today</div>
      </section> */}

    </div>
  );
}

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}
export default Commerical
