import React from 'react';
import Map from "../components/StreetView";
import LocationBar from "../components/LocationBar";
import SuggestedList from "../components/SuggestedList";

const locations = 
  [
    { name: "Seattle, United States", 
      geoInfo: {
        position:{lat: 47.6572773, lng: -122.3072585}, 
        pov:{heading:36, pitch:15}
      }
    },
    {
      name: " Hirosaki Park, Japan",
      geoInfo: {
        position:{lat: 40.6083251, lng: 140.4633958}, 
        pov:{heading:325, pitch:5}
      }
    },
    {
      name: "Jinhae-gu, Korea",
      geoInfo: {
        position:{lat: 35.1579889, lng: 128.6595771}, 
        pov:{heading:210, pitch:35}
      }
    },
    {
      name: "Botanic Gardens, United Kingdom",
      geoInfo: {
        position:{lat: 51.4787438, lng: -0.295573}, 
        pov:{heading:230.83, pitch:-10},
      }
    },
    {
      name: "Wuhan, China",
      geoInfo: {
        position:{lat: 30.5360482, lng: 114.364323}, 
        pov:{heading:327.83, pitch:-90}
      },
    },
  
  ];

class Trip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  selectLocation = current => {
    this.setState({ current });
  };

  render() {
    return (
      <div id="trip-page">
        <div>
          <LocationBar locations={locations} selectLocation={this.selectLocation}/>
          <div id="street-view">

            <Map geoInfo={locations[this.state.current].geoInfo}/>
          </div>
          <div id="addition-info">
          </div>
        </div>
      </div>
    );
  }
}

export default Trip;
