import React from 'react';
import Location from './Location';

class LocationBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return (
      <div>
        <div style={{width: "95%", margin: "auto"}}>
          <div style={{position: 'relative'}}>
            <div style={{height: '60px',
              display: 'flex', justifyContent: `space-between`, alignItems: "center", marginBottom: '10px' }}>
              <Location location="Start" index='0' src="./start.png" selectLocation={this.props.selectLocation} />
              {
                this.props.locations.map((location, i) => {
                  console.log(location)
                  return (
                    <Location location={location.name} index={i+1} src="./dot_normal.png" selectLocation={this.props.selectLocation} />
                  )
                })
              }
              <Location location="End" index={this.props.locations.length+1} src="./dot_normal.png" selectLocation={this.props.selectLocation} />
            </div>
            <div style={{height: `1px`, width: `100%`, backgroundColor: 'white', position: "absolute", bottom: "4px", zIndex: `1`}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationBar;