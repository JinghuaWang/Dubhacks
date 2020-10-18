import React, {Component} from 'react';
import './App.css';
import Title from "./Title"
import MainContent from "./MainContent";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Title className={"title"}/>
            <MainContent/>
        </div>
    );
  }
}

export default App;
