import React from 'react';
import Location from './Location';

class LocationBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return (
      <div>
        <div style={{position: 'relative'}}>
          <div style={{height: '60px', minWidth: "500px", backgroundColor: 'grey', 
            display: 'flex', justifyContent: `space-between`, alignItems: "center" }}>
            <Location location="Start" src="./start.png"/>
            {
              this.props.locations.map((place, i) => {
                return (
                  <Location location={place} src="./dot_normal.png"/>
                )
              })
            }
            <Location location="End" src="./dot_normal.png"/>
          </div>
          <div style={{height: `2px`, width: `100%`, backgroundColor: 'white', position: "absolute", bottom: "18px", zIndex: `1`}}></div>
        </div>
      </div>
    );
  }
}

export default LocationBar;