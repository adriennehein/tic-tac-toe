import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-bar">
          X - Tic Tac Toe - O
        </header>

        <div className="grid-board">

          <div className="current-player">
            its player Xs turn
          </div>

          <div className="game-grid">
            <div className="grid-column">
              <div className="grid-tile">
              </div>
              <div className="grid-tile">
              </div>
              <div className="grid-tile">
              </div>
            </div>
            <div className="grid-column">
              <div className="grid-tile">
                <div className="x-piece">X</div>
              </div>
              <div className="grid-tile">
              </div>
              <div className="grid-tile">
              </div>
            </div>
            <div className="grid-column">
              <div className="grid-tile">
              </div>
              <div className="grid-tile">
                <div className="o-piece">O</div>
              </div>
              <div className="grid-tile">
              </div>
            </div>
          </div>

          <div className="new-game">
            new game
          </div>
        </div>

        <footer className="footer-bar">
          Built with React by Adrienne Hein 2018
        </footer>

      </div>
    );
  }
}

export default App;
