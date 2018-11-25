import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';


export class GMaps extends Component {
      constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            lng: 5,
            lat: 34,
            zoom: 1.5,
            aqi: []
        };
        this.getAirQuality = this.getAirQuality.bind(this);
      }

    componentDidMount(){
        this.getAirQuality();
    }
    
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <Marker  position={{lat:40, lng: 40}} onClick={this.onMarkerClick}
                name={'Current location'} />

                  <Marker  position={{lat:40, lng: 40}} onClick={this.onMarkerClick}
                name={'Current location'} />

                {this.state.aqi.map(item => <Marker name={item.aqi} position={{lat:item.lat, lng:item.lon}} />)}

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }

    getAirQuality(){
        axios.get('https://api.waqi.info/map/bounds/?latlng=39.379436,116.091230,40.235643,116.784382&token=e394afa862a0974d645b72fbd8accd656384babb')
        .then((response) => {
            console.log(response['data']['data']);
            const newAqi = response['data']['data'];
            this.setState({aqi: newAqi})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
        });
    }
    
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyApUS92bdIKLkmxq2zi1cIP-mboJo_TPEw")
})(GMaps)


