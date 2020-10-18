import React from 'react';
import { PlayCircleFilled } from '@ant-design/icons';


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
    if (this.props.selected) {

    }
    const locationStyle = {color: 'white', width: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center'};
    const locat = this.props.location.split(", ")
    return (
      <div style={locationStyle} onClick={this.onClick}>
        <div style={{fontWeight: '600', font: "2em", lineHeight: "5px"}}>{this.props.location.split(", ")[0]+","}</div>
        <div style={{fontWeight: '600', font: "2em"}}>{this.props.location.split(", ")[1] + " "}</div>
        {(true)?<PlayCircleFilled style={iconStyle}/>: null}
      </div>
    );
  }
}

export default Location;