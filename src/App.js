import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginView from './LoginView';
import Player from './Player';
import Game from './Game';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    
  }

  startGame(name) {
    
  }

  render() {
    if(this.state.game) {
      console.log("AAAAAA")
    } else {
      return <LoginView />
    }
  }
}

export default App
