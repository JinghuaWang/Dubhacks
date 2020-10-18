import React, {Component} from 'react';
import './App.css';
import Title from "./main_page_components/Title"
import MainContent from "./main_page_components/MainContent";
import Trip from './pages/Trip';
import StartPage from "./main_page_components/StartPage";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        gameStart: 0
    };
  }

  
  setGame = (a) => { 
      this.setState({
          gameStart: a
      })
  }

  render() {
      if (this.state.gameStart === 2) {
          return <Trip/>
      } else if (this.state.gameStart === 1) {
          return (
              <div>
                  <style>{'body { background-image: url("img/bg_cherryblossom.jpg"); }'}</style>
                  <StartPage changeState={this.setGame}/>
              </div>
              );
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
