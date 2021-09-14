import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import GameView from './../GameView.js'
import Game from './../Game.js';
import Player from  './../Player.js'
import Card from './../Card.js'
import Deck from './../Deck.js'

describe('GameView', () => {
  let player_list, view, container, game, wrapper

  beforeEach(() => {
    player_list = [new Player("John"), new Player("Bob")]
    player_list[0]._cards = [new Card("7", "D"), new Card("9", "H")]
    player_list[1]._cards = [new Card("9", "D"), new Card("10", "H"), new Card("J", "H")]

    game = new Game(player_list)

    const wrapper = <GameView game={game}/>
  })

  describe('displaying the players in a game', () => {
    it('lists the name of each player', () => {
      
    })
  })
})