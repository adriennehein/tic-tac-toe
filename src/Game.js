import React, { Component } from 'react';

class Game extends Component {
  handleClick(e) {
    this.props.placePlayer(e);
    this.props.checkStatus();
  }

  newGame() {
    this.props.newGame();
  }

  render() {
    let handleClick = this.handleClick.bind(this);

    return (
      <div className="grid-board">

        <div className="game-status">
          {this.props.gameStatus}
        </div>



        <div className="game-grid">

          {
            this.props.gameGrid.map(function(item, i){
              return (
              <div className="grid-tile" key={i} id={i} onClick={handleClick}>
                <div className={"piece-" + item} id={i}>{item}</div>
              </div>
              )
            })
          }

        </div>

        <div className="new-game" onClick={this.newGame.bind(this)}>
          new game
        </div>
      </div>
    );
  }
}

export default Game;
