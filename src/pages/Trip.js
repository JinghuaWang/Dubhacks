import React from 'react';
import Map from "../components/StreetView";
import { Steps, Divider, Row, Col } from 'antd';
const { Step } = Steps;

function Trip() {
  return (
    <div id="trip-page">
      <div>
        <Steps progressDot current={1}>
          <Step title="Finished"/>
          <Step title="In Progress"/>
          <Step title="Waiting"/>
        </Steps>
        <div id="street-view">
          <Map></Map>
        </div>
        <div id="addition-info">

        </div>
      </div>,
    </div>
  );
}

export default Trip;
