import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.game.players().map(player => <li key={player.name()}>{player.name()}</li>)
    return(<ul>{listItems}</ul>)
  }
}


export default GameView