import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class GoogleApi extends Component {
  render() {
    const style = {
    // width: '300px',
    // height: '300px',
    // margin: "auto"
    }
    return (
      <div style={style}>
      <Map google={this.props.google}
        initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Dallas'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDipIfTVb008Ko6uV16s_HodgiT0XkZl0I")
})(GoogleApi)
