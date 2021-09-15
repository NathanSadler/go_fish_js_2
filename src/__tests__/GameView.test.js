import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import GameView from './../GameView.js'
import Game from './../Game.js';
import Card from './../Card.js'
import Player from  './../Player.js'

describe('GameView', () => {
  let player_list, view, container, game, wrapper

  beforeEach(() => {
    const player_list = [new Player("John"), new Player("Bob")]
    player_list[0].setHand([new Card("7", "D"), new Card("9", "H")])
    player_list[1].setHand([new Card("9", "D"), new Card("10", "H"), new Card("J", "H")])
    player_list[0].setScore(2)
    player_list[1].setScore(0)

    game = new Game(player_list)

    wrapper = render(<GameView game={game}/>)

  })

  describe('displaying the players in a game', () => {
    it('lists the name of each player', () => {
      // debugger
      expect(wrapper.container.innerHTML).toContain('John')
      expect(wrapper.container.innerHTML).toContain('Bob')
    })

    describe('displaying the cards of each player', () => {
      it('displays the cards in the hand of the first player', () => {
        expect(wrapper.container.innerHTML).toContain('7 of Diamonds')
        expect(wrapper.container.innerHTML).toContain('9 of Hearts')
      })

      it('does not display the cards for players other than the first', () => {
        expect(wrapper.container.innerHTML).not.toContain('9 of Diamonds')
        expect(wrapper.container.innerHTML).not.toContain('10 of Hearts')
        expect(wrapper.container.innerHTML).not.toContain('Jack of Hearts')
      })

      it('displays the number of cards each player has', () => {
        expect(wrapper.container.innerHTML).toContain('2 card(s)')
        expect(wrapper.container.innerHTML).toContain('3 card(s)')
      })

      it('displays the score of each player', () => {
        expect(wrapper.container.innerHTML).toContain('2 book(s)')
        expect(wrapper.container.innerHTML).toContain('0 book(s)')
      })
    })
  })
})