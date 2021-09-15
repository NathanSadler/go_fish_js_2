import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginView from './LoginView';
import GameView from './GameView';
import Game from './Game';
import Player from './Player';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    
  }

  startGame(name) {
    const game = new Game([new Player(name)], 4)
    this.setState({game})
  }

  render() {
    if(this.state.game) {
      return <GameView game={this.state.game} />
    } else {
      return <LoginView onLogin={this.startGame.bind(this)}/>
    }
  }
}

export default App
