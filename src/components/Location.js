import React from 'react';


class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const icon = {height: '25px'}
    const locationStyle = {color: 'white', width: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'};
    return (
      <div style={locationStyle}>
        <div>{this.props.location}</div>
        <img src={this.props.src} style={icon}></img>
      </div>
    );
  }
}

export default Location;