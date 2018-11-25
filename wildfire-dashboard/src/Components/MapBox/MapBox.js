import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import toGeoJSON from '@mapbox/togeojson';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbm1hdGh1ciIsImEiOiJjam93ZzZrYjcwM3V2M3dwZzYzNHY4enYyIn0.d4p2Z0R8HJwCeyugUCypbA';
class MapBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lng: 2000,
      lat: 34,
      zoom: 1.5
    };
  }
  


  componentDidMount(){

    const {lng, lat, zoom} = this.state;
    // console.log(process.env.MAPBOX)
    const map = new mapboxgl.Map({
      container: "map-container",
      style: 'mapbox://styles/amanmathur/cjowgwzze4rda2smrjgx07w9m',
      center: [-90, 40],
      zoom: 4
    })

    // const marker = new mapboxgl.Marker()
    //   .setLngLat([5, 34])
    //   .addTo(map);
    // ;
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
      <div id="map-container">
      </div>
      <p className="map-text">Current Wildfire Tracker</p>
      </div>
    );
  }


}

export default MapBox;
