import React, { Component } from 'react';

class Game extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.updatePlayer();
    this.props.placePlayer(e);
    this.props.checkWon();
  }

  handleChange() {
    console.log('test');
  }

  render() {
    let handleClick = this.handleClick.bind(this);

    return (
      <div className="grid-board">

        <div className="current-player">
          its player {this.props.currentPlayer}s turn
        </div>



        <div className="game-grid">

          {
            this.props.gameGrid.map(function(item, i){
              return (
              <div className="grid-tile" key={i} id={i} onClick={handleClick}>
                <div className={item + "-piece"} id={i}>{item}</div>
              </div>
              )
            })
          }

        </div>

        <div className="new-game">
          new game
        </div>
      </div>
    );
  }
}

export default Game;
