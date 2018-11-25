import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMaps from './Components/GMaps/GMaps'
import MapBox from './Components/MapBox/MapBox'

import TwitterFeed from './Components/TwitterFeed/TwitterFeed'
class App extends Component {

  render() {
    return (
      <div className="container">
      <div className="score-container">
        <p className="logo">FireTracker</p>
        <input type="text"></input>
        <p className="your-status">Your Status</p>
        <div className="status-circle evacuate"><span>EVACUATE</span></div>
      </div>
      <div className="map-container">
          {/* <GMaps></GMaps> */}
          <MapBox></MapBox>
      </div>
      <div className="social-container">
      </div>
      </div>
    );
  }
}

export default App;
