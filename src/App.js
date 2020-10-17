import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Steps, Divider } from 'antd';
const { Step } = Steps;

function App() {
  return (
    <div className="App">
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
      <>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <Divider />
        React and Ant Design are work! Wow!
      </>,
    </div>
  );
}

export default App;
