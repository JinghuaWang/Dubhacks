import React, {Component} from 'react';
import './App.css';
import Title from "./main_page_components/Title"
import MainContent from "./main_page_components/MainContent";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Title className={"title"}/>
            <MainContent className={"title"}/>
        </div>
    );
  }
}

export default App;
