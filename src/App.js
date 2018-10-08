import React, { Component } from 'react';
import Game from './Game.js'
import Header from './Header.js'
import Player from './Player.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: '',
      playerTwo: '',
      currentPlayer: '',
      gameStatus: 'choose a piece to begin',
      counter: 0,
      gameWon: false,
      gameGrid: Array(9).fill(null),
    }
  }


  selectPlayer(playerOne, playerTwo) {
    if (!this.state.playerOne) {
      this.setState({
        playerOne: playerOne,
        playerTwo: playerTwo,
        currentPlayer: playerOne,
        gameStatus: 'player '+ playerOne + "'s turn"
      })
    }
  }


  placePlayer(e) {
    let current = this.state.currentPlayer;
    var i = e.target.id;
    var gameGrid = this.state.gameGrid;
    (current == this.state.playerOne) ? (current = this.state.playerTwo) : (current = this.state.playerOne);

    if (!gameGrid[i] && !this.state.gameWon && this.state.playerOne) {
      gameGrid[i] = this.state.currentPlayer;
      this.setState({
        gameGrid: gameGrid,
        counter: this.state.counter+1,
        currentPlayer: current,
        gameStatus: 'player '+ current  +"'s turn"
      });
    }
  }

  newGame() {
    this.setState({
      playerOne: '',
      playerTwo: '',
      currentPlayer: '',
      gameStatus: 'choose a piece to begin',
      counter: 0,
      gameWon: false,
      gameGrid: Array(9).fill(null)
    });
  }

  checkStatus() {
    const winState = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8]
    ];
    let newGrid= this.state.gameGrid;
    let gameWon = this.state.gameWon;

    for(let i=0; i < winState.length; i++) {
      const [a, b, c] = winState[i];
      if (newGrid[a] && newGrid[a] === newGrid[b] && newGrid[a] === newGrid[c] && !gameWon) {
        this.setState({
          gameWon: true,
          gameStatus: this.state.currentPlayer + ' wins'
        })
      }
    }
    if (this.state.counter == 8 && !gameWon) {
      this.setState({
        gameStatus: 'stalemate',
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo} />

        <Player
          selectPlayer={this.selectPlayer.bind(this)} />

        <Game
          currentPlayer={this.state.currentPlayer}
          gameStatus={this.state.gameStatus}
          gameGrid={this.state.gameGrid}
          placePlayer={this.placePlayer.bind(this)}
          checkStatus={this.checkStatus.bind(this)}
          newGame={this.newGame.bind(this)} />

        <footer className="footer-bar">
          Built with React by AE Hein 2018
        </footer>

      </div>
    );
  }
}

export default App;
