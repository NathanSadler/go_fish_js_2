import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import GameView from './../GameView.js'
import Game from './../Game.js';
import Player from  './../Player.js'

describe('GameView', () => {
  let player_list, view, container, game, wrapper

  beforeEach(() => {
    player_list = [new Player("John"), new Player("Bob")]

    game = new Game(player_list)

    wrapper = render(<GameView game={game}/>)

  })

  describe('displaying the players in a game', () => {
    it('lists the name of each player', () => {
      // debugger
      expect(wrapper.container.innerHTML).toContain('John')
      expect(wrapper.container.innerHTML).toContain('Bob')
    })
  })
})