import BotPlayer from './BotPlayer.js'
import Deck from './Deck.js'
import Game from './Game.js'
import Player from './Player.js'
import TurnResult from './TurnResult.js'

class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  describeRank() {
    const named_ranks = {
      'A' : 'Ace',
      'J' : 'Jack',
      'Q' : 'Queen',
      'K' : 'King'
    }
    if(named_ranks.hasOwnProperty(this._rank)) {
      return named_ranks[this._rank]
    }

    return this._rank
  }

  describeSuit() {
    const suits = {
      'C' : 'Clubs',
      'D' : 'Diamonds',
      'H' : 'Hearts',
      'S' : 'Spades'
    }
    
    return suits[this._suit]
  }

  describe() {
    return `${this.describeRank()} of ${this.describeSuit()}`
  }

  equals(other_card) {
    if (this.rank() == other_card.rank() && this.suit() == other_card.suit()) {return true}
    return false
  }

  generateId() {
    return `${this._rank}_${this._suit}`
  }

  rank() {
    return this._rank
  }

  suit() {
    return this._suit
  }
}

export default Card