import React from 'react';
import Map from "../components/StreetView";
import LocationBar from "../components/LocationBar";
import SuggestedList from "../components/SuggestedList";

const locations = ["Seattle", "Japan", "China"];

class Trip extends React.Component {

  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    return (
      <div id="trip-page">
        <div>
          <LocationBar locations={locations}/>
          <div id="street-view">
            <Map/>
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
