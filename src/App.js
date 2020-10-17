import React, {Component} from 'react';
import './App.css';
import Title from "./Title"
import MainContent from "./Carousel";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Title/>
            <MainContent/>
        </div>
    );
  }
}

export default App;
