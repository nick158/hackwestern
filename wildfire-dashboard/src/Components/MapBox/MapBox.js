import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'

require('dotenv').config();
mapboxgl.accessToken = 'pk.eyJ1IjoibmljazE1OCIsImEiOiJjam92NWwwb3kxM2FyM3BvNHc0Mjk2dDhlIn0.alo5roTHXLOiJCi85gShkg';
class MapBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidMount(){
    const {lng, lat, zoom} = this.state;
    console.log(process.env.MAPBOX)
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/nick158/cjovuckr93az52snrhwgql1c5',
      center: [2.317600, 48.866500],
      zoom: 12.0
    })
//event handler
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

export default MapBox;
