import Card from './../Card.js'
import Player from './../Player.js'

describe('Player', () => {
  let player

  beforeEach(() => {
    player = new Player('Player')
  })

  describe('#cards', () => {
    it('returns a list of the cards the player has', () => {
      const card_list = [new Card("4", "D"), new Card("5", "D"), new Card("6", "D")]
      player._cards = card_list
      expect(player.cards()).toEqual(card_list)
    })
  })

  describe('#constructor', () => {
    it("sets the player's name", () => {
      expect(player._name).toEqual('Player')
    })
  })

  describe('#name', () => {
    it("returns the player's name", () => {
      expect(player.name()).toEqual('Player')
    })
  })

  describe('#setHand', () => {
    it("sets the cards in the player's hand", () => {
      const expected_cards = [new Card("4", "H"), new Card("5", "H")]
      player.setHand(expected_cards)
      expect(player.cards()).toEqual(expected_cards)
    })
  })


})