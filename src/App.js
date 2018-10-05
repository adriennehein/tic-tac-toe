import React, { Component } from 'react';
import Game from './Game.js'
import Header from './Header.js'
import PlayerOne from './PlayerOne.js'
import PlayerTwo from './PlayerTwo.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: '',
      playerTwo: '',
      currentPlayer: '',
      gameGrid: ['', '', '', '', '', '', '', '', ''],
      wonGrid: ['x', 'x', 'x', 'o', 'o', '', '', '', '']
    }
  }

  selectPlayerOne(playerOne) {
    this.setState({playerOne: playerOne})
  }

  selectPlayerTwo(playerTwo) {
    this.setState({playerTwo: playerTwo})
  }

  updatePlayer() {
    (this.state.currentPlayer === this.state.playerOne) ? this.setState({currentPlayer: this.state.playerTwo}) : this.setState({currentPlayer: this.state.playerOne});
  }

  placePlayer(e) {
    var i = e.target.id;
    var gameGrid = this.state.gameGrid;
    if (gameGrid[i] === '') {
      gameGrid[i] = this.state.currentPlayer;
      this.setState({gameGrid: gameGrid});
    }
  }

  checkWon() {

  }

  render() {
    return (
      <div className="App">
        <Header playerOne={this.state.playerOne} playerTwo={this.state.playerTwo}/>

        <PlayerOne playerOne={this.state.playerOne} selectPlayerOne={this.selectPlayerOne.bind(this)}/>

        <PlayerTwo playerTwo={this.state.playerTwo} selectPlayerTwo={this.selectPlayerTwo.bind(this)} />

        <Game currentPlayer={this.state.currentPlayer} playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} gameGrid={this.state.gameGrid} updatePlayer={this.updatePlayer.bind(this)}
        placePlayer={this.placePlayer.bind(this)}
        checkWon={this.checkWon.bind(this)}/>

        <footer className="footer-bar">
          Built with React by AE Hein 2018
        </footer>

      </div>
    );
  }
}

export default App;
