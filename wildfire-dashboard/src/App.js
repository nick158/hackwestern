import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMaps from './Components/GMaps/GMaps'
import TwitterFeed from './Components/TwitterFeed/TwitterFeed'
class App extends Component {

  render() {
    return (
      <div className="container">

      <TwitterFeed></TwitterFeed>
      </div>
    );
  }
}

export default App;
