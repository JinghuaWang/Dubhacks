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
      name: "Wuhan, China",
      
    }
  ];

class Trip extends React.Component {

  state = {
    current: 0,
  };

  selectLocation = current => {
    this.setState({ current });
  };

  render() {
    return (
      <div id="trip-page">
        <div>
          <LocationBar locations={locations} selectLocation={this.selectLocation}/>
          <div id="street-view">

            <Map geoInfo={locations[1].geoInfo}/>
          </div>
          <div id="addition-info">
            <SuggestedList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Trip;
