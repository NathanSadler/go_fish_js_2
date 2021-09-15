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

  generatePlayerInfo() {
    const listItems = this.props.game.players().map(player => <li id={player.name()} key={player.name()}>
      {player.name()}, {player.cardCount()} card(s), {player.score()} book(s)</li>)
    return(<ul>{listItems}</ul>)
  }

  generateTakeTurnForm() {
    return(
      <form>
        <select name="player_name" id="player_name">
          {this.props.game.players().slice(1).map(player => <option key={player.name()} value={this.props.game.getIndexOfPlayer(player)}>{player.name()}</option>)}
        </select>

        <select name='card' id='card'>
          {this.props.game.players()[0].cards().map(card => <option key={card.generateId()} value={card.generateId()}>{card.describe()}</option>)}
        </select>
      </form>
    )
  }

  render() {
    return(
    <div>
      {this.generatePlayerInfo()}
      {this.generateTakeTurnForm()}
    </div>)
  }
}


export default GameView