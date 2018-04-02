import React from 'react';
import { Component } from 'react';
import GoogleApi from './GoogleApi';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import ballbone from "../imgs/ball-&-bone.svg"
import footsteps from "../imgs/footsteps.svg"
import sofa from "../imgs/sofa.svg"
import  wine from "../imgs/wine.svg"
import couch from "../imgs/Couch.svg"
import star from "../imgs/Star.svg"
import check from "../imgs/check.svg"
import bathRoom from "../imgs/bathRoom.png"
import gutter from "../imgs/gutter.png"
import  upholstery from "../imgs/upholstery.png"
import rugCleaning from "../imgs/rugCleaning.png"
import livingRoom from "../imgs/livingRoom.png"
import smell from "../imgs/smell.svg"
import love from "../imgs/love.svg"

const Home = () => {
  const map = {
    margin: "auto",
    maxWidth: "900px",
    height: "300px",
    position: "relative",
    bottom: "20px"
  }

  const background = {
    // backgroundColor: "red"
  }
  const alignPicture = {
    alignItems: "center",
    // backgroundColor: "red"
  }
  const whyContainer = {
    paddingTop: "30px"
  }
  const whyUs = {
    width: "500px"
  }
  return(
  <div>
    <section class="call-to-action">
      <div class="call-to-action-home">
      <h1 class="home-title large-font large-font-title">We specialize in commercial & residential cleaning</h1>
      {/* <h3 class="middle-font home-title">full-service commercial & residential cleaning specialists</h3> */}
        <div class="call-to-action-box">
          <div class="action-box-text">
            <div class="align-text-field">
              <div class="home-title-text-bar-price">
                <h1 class="middle-font">Price Guarantee</h1>
              </div>
              <div class="text-box-spacing">
                <input class="blue-button" id="Name" type="text" placeholder="name..." />
              </div>
              <div class="text-box-spacing">
                <input class="blue-button" id="Name" type="text" placeholder="Email Address..."/>
              </div>
              <div class="text-box-spacing">
                <input class="blue-button" id="Name" type="text" placeholder="date..."/>
              </div>
              <div class="text-box-spacing">
                <input class="blue-button" id="Name" type="text" placeholder="city..."/>
              </div>
            </div>
            <br/>

            <div class="action-button-alignment">
              <Link to="/invoice" >
              <div class="action-button">
              <div class="onesteam-margin-button">click here</div>
              </div>
              </Link>
              <div class="res-or-com--alignment">
                <h2 class="tiny-font">Or</h2>
                <h2 class="tiny-font">Commerical</h2>
              </div>
              <a href="mailto:lucky@cleanwithone.com?Subject=Hello">
              <div class="action-button">
                <div class="onesteam-margin-button">contact us</div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
    <div class="column-title apprance">Services</div>
      <div class="">
        <div class=" flex-container order-second">
          <div class="flex-element add-pads">
            <ul>
              <li>
                <div class="service-row">
                  <img class="onesteam-icon" src={ballbone} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Carpet</label>
                    </div>
                    <p class="description">Get the stains out.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row" >
                  <img class="onesteam-icon" src={footsteps} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Tile & Grout</label>
                    </div>
                    <p class="description">Bright and shinny.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row" >
                  <img class="onesteam-icon" src={sofa}/>
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">upholstery</label>
                    </div>
                    <p class="description">Netflix and Chill.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row" >
                  <img class="onesteam-icon" src={wine} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Stairs</label>
                    </div>
                    <p class="description">We restore high traffic areas.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row">
                  <img class="onesteam-icon" src={smell} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Air Duct</label>
                    </div>
                    <p class="description">we clean dust, grime, debris, pet dander & allergens</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        <div class="employee-service-column flex-element">
          <div class="employee-service-title">
            <div class="employee-alignment">
              <img class="employee-icon" src={star} />
              Price Guarantee
            </div>
            <div class="employee-alignment">
              <img class="employee-icon" src={star} />
              $35 dollars per room. Flat rate.
            </div>
            <div class="employee-alignment">
              <img class="employee-icon" />
              Flat rate includes:
            </div>

          </div>
          <div class="employee-alignment">
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              Move light furniture
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              Pre vacuum
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              Pre-spray soil areas
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              One steam clean
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              Focus dry fans
            </div>
          </div>
          <Link to="/invoice">
          <div class="onesteam-button">
            <div class="onesteam-margin-button">Fill out form</div>
          </div>
          </Link>
        </div>
      </div>

      </div>
    </section>
    <section class="services-for-commerical">
      <div class="column-title">Why choose One Steam?</div>
        <div style={whyContainer}>

          <div class="flex-container order-second">
            <div class="flex-element">
              <div class="why-title">
                <p >Carpet Cleaning</p>
              </div>
             <div class="why-description">
               Our full-service commercial & residential cleaning specialists can get out the toughest, deepest, and dirtiest carpet stains quickly and affordably.
             </div>
            </div>
            <div class="flex-element">
              <div class="align-content-center">
                <img class="" src={livingRoom} />
              </div>
            </div>
          </div>


          <div class="flex-container order-second">
            <div class="flex-element">
              <div class="why-title">
                <p >Tilt and Grout Cleaning Certified</p>
              </div>
             <div class="why-description">
               At One Steam, we believe the health and safety of you and your family should never be compromised.
             </div>
            </div>
            <div class="flex-element">
              <div class="align-content-center">
                <img class="" src={bathRoom}/>
              </div>
            </div>
          </div>

          <div class="flex-container order-second">
            <div class="flex-element">
              <div class="why-title">
                <p>Upholstery</p>
              </div>
             <div class="why-description">
               We help you clean your couches, sofas and other upholstery ensuring that your home and office furniture are clean and smell fresh.
             </div>
            </div>
            <div class="flex-element">
              <div class="align-content-center">
                <img class="" src={upholstery} />
              </div>
            </div>
          </div>

          <div class="flex-container order-second">
            <div class="flex-element">
              <div class="why-title">
                <p >Air Duct Cleaning</p>
              </div>
             <div class="why-description">
             We have what it takes to reduce the onset of allergy and asthma symptoms by thoroughly eliminating carpet dirt, mites, dust and odors.
             </div>
            </div>
            <div class="flex-element">
              <div class="align-content-center">
                <img class="" src={gutter} />
              </div>
            </div>
          </div>



          <div class="flex-container order-second">
            <div class="flex-element">
              <div class="why-title">
                <p >Master Rug Cleaner Certified</p>
              </div>
             <div class="why-description">
               specialize in not only cleaning your area or oriental rugs, but also restoring them to their original beauty.
             </div>
            </div>
            <div class="flex-element">
              <div class="align-content-center">
                <img class="" src={rugCleaning} />
              </div>
            </div>
          </div>


        </div>

    </section>
    <section class="services-for-commerical">
      <div class="column-title">Commerical Service</div>
      <div class="commerical-column">
        <div class="theatre-img">
          <div class="commerical-comment">
            <div class="commerical-description">
              <div class="commerical-frontpage">
                Middle school auditoriums to commerical threaters,
                we keep our clients happy and we will prove to you why we are the one!
              </div>
                <div class="commerical-description-button">
                  <div class="left"><img src={love} />our commerical clients</div>
                  <div class="commerical-button right">
                    <Link class="commerical-click" to="/commerical">Learn More</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
       {/* <div class="column-title">We are located in the heart of Mesa, Arizona</div> */}
      {/* https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ */}
      <div style={map}>
        <GoogleApi />
      </div>
    </section>
  </div>
);
}

export default Home
