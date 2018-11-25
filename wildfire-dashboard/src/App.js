import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMaps from './Components/GMaps/GMaps'

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="map-container">
          <GMaps></GMaps>
      </div>
      </div>
    );
  }
}

export default App;
