import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import ReactStreetview from 'react-streetview';

const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const streetViewPanoramaOptions = {
  position: {lat: 46.9171876, lng: 17.8951832},
  pov: {heading: 100, pitch: 0},
  zoom: 1
};
class StreetView extends React.Component {
  static defaultProps = {
    center: { lat: 42.345573, lng: -71.098326 },
    zoom: 11
  };
  componentDidMount() {
    const google = window.google;
    const fenway = { lat: 42.345573, lng: -71.098326 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: fenway,
      zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
    map.setStreetView(panorama);
  }
 
  render() {
    // see https://developers.google.com/maps/documentation/javascript
    const googleMapsApiKey = 'YOUR_API_KEY';
 
    // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
    const streetViewPanoramaOptions = {
        position: this.props.center,
        pov: {
          heading: 34,
          pitch: 10,
        },
        zoom: 1
    };

    return (
      <div>
        <div id="pano" style={{
            width: '800px',
            height: '450px',
            backgroundColor: '#eeeeee'
        }}></div>
        <div id="map" style={{
            width: '800px',
            height: '450px',
            backgroundColor: '#eeeeee'
        }}></div>
        {/* <div style={{
            width: '800px',
            height: '450px',
            backgroundColor: '#eeeeee'
        }}>
            <ReactStreetview
                apiKey="AIzaSyDnOzOBU-4dH3J6She34Mq25NOZI_rqD90"
                streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
        </div>

        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDnOzOBU-4dH3J6She34Mq25NOZI_rqD90"}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
        </div> */}
      </div>
    );
  }
}
 
export default StreetView;