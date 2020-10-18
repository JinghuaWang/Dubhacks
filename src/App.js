import React, {Component} from 'react';
import './App.css';
import Title from "./main_page_components/Title"
import MainContent from "./main_page_components/MainContent";
import Trip from './pages/Trip';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        gameStart: false
    };
  }

  setGame = () => {
      let k = !(this.state.gameStart);
      this.setState({
          gameStart: k
      })
  }

  render() {
      if (this.state.gameStart) {
          return <Trip/>
      }
      return (
          <div>
              <Title className={"title"}/>
              <MainContent className={"title"} changeState={this.setGame}/>
          </div>
      );
  }
}

export default App;
