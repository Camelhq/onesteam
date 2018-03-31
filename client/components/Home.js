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
      <h1 class="home-title large-font large-font-title">We are a full-service commercial & residential cleaning specialist</h1>
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
              <div class="action-button">
                <div class="onesteam-margin-button">click here</div>
              </div>
              <div class="res-or-com--alignment">
                <h2 class="tiny-font">Or</h2>
                <h2 class="tiny-font">Commerical</h2>
              </div>
              <div class="action-button">
                <div class="onesteam-margin-button">contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
    <div class="column-title apprance">Services for every apprance</div>
      <div class="">
        <div class=" flex-container order-second">
          <div class="flex-element">
            <ul>
              <li>
                <div class="service-row">
                  <img class="onesteam-icon" src={ballbone} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Carpet</label>
                    </div>
                    <p class="description">Hard to get spots from your pet.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row" >
                  <img class="onesteam-icon" src={footsteps} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Tile</label>
                    </div>
                    <p class="description">A built-up of scrub.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row" >
                  <img class="onesteam-icon" src={sofa}/>
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Sofa</label>
                    </div>
                    <p class="description">That wine stain after christmas.</p>
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
                    <p class="description">muddy shoes after a birthday party.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="service-row">
                  <img class="onesteam-icon" src={couch} />
                  <div class="service-font">
                    <div class="testing">
                      <label class="thick-letters">Couch</label>
                    </div>
                    <p class="description">Want to restore your favorite couch.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        <div class="employee-service-column flex-element">
          <div class="employee-service-title">
            <div class="employee-alignment">
              <img class="employee-icon" src={star} />
              Price Guarantee 15x15 for $35
            </div>
          </div>
          <div class="employee-alignment">
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              We stay until its done correct
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              We pay attention to details
            </div>
            <div class="employee-statement">
              <img class="employee-icon" src={check} />
              All areas are checked again
            </div>
          </div>
          <div class="onesteam-button">
            <div class="onesteam-margin-button">Fill out form</div>
          </div>
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
                <p >Tilt Cleaner Certified</p>
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
                <p>Furniture</p>
              </div>
             <div class="why-description">
               We have what it takes to reduce the onset of allergy and asthma symptoms by thoroughly eliminating carpet dirt, mites, dust and odors.
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
        </div>

    </section>
    <section class="services-for-commerical">
      <div class="column-title">Commerical Service</div>
      <div class="commerical-column">
        <div class="theatre-img">
          <div class="commerical-comment">
            <div class="commerical-description">
              <div class="commerical-frontpage">
                From middle school auditoriums to commerical threaters,
                we keep our clients happy without missing a spot.
              </div>
                <div class="commerical-description-button">
                  We love commerical
                  <div class="commerical-button">
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
