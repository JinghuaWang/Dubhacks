import React from 'react';
import { PlayCircleFilled, EnvironmentFilled } from '@ant-design/icons';


class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    console.log(this.props.index);
    this.props.selectLocation(this.props.index);
  }

  render() {
    const iconStyle = {fontSize: '25px'}
    const locationStyle = {color: 'white', width: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center'};

    let city;
    let country;
    let icon;
    if (this.props.location==="Start" || this.props.location=="End") {
      city = (<div style={{fontWeight: '600', font: "2em"}}>{this.props.location}</div>)
    } else 
    {
      city = (
        <div style={{fontWeight: '600', font: "2em", lineHeight: "5px"}}>{this.props.location.split(", ")[0]+","}</div>
      )
      country = (<div style={{fontWeight: '600', font: "2em"}}>{this.props.location.split(", ")[1]}</div>);
    }
    if (this.props.location==="Start"){
      icon = <PlayCircleFilled style={iconStyle}/>
    } else {
      icon = <EnvironmentFilled style={iconStyle}/>
    }
    return (
      <div style={locationStyle} onClick={this.onClick}>
        {city}
        {country}
        {icon}
      </div>
    );
  }
}

export default Location;