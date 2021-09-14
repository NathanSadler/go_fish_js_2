import Card from './Card.js'
import Deck from './Deck.js'
import Game from './Game.js'
import Player from './Player.js'
import TurnResult from './TurnResult.js'

class BotPlayer extends Player {
  constructor(name) {
    super(name)
  }

  selectPlayerToAskIndex(game) {
    let validIndexes = []
    game.players().forEach((_, index) => {
      if(!game.players()[index].equals(this) && game.players()[index].cards().length > 0) {
        validIndexes.push(index)
      }
    })
    return validIndexes[0]
  }

  selectRankToAskFor() {
    const index = Math.floor(Math.random() * (this.cards().length))
    return this.cards()[index].rank()
  }
}

export default BotPlayer