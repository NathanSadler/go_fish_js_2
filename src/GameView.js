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
    return(<p>AAAAAA</p>)
  }
}


export default GameView