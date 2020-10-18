import React, {Component} from 'react';
import './App.css';
import Title from "./Title"
import MainContent from "./Carousel";
import Trip from "./pages/Trip"

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Title/>
            <MainContent/>
            <Trip/>
        </div>
    );
  }
}

export default App;
