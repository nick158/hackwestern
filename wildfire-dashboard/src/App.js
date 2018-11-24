import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapBox from './Components/MapBox/MapBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MapBox></MapBox>
        </header>
      </div>
    );
  }
}

export default App;
