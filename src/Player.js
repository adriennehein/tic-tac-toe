import React, { Component } from 'react';

class Player extends Component {
  handleChange(e) {
    console.log(e.target.value);
    var playerTwo
    e.target.value == 'x' ? playerTwo = 'o' : playerTwo = 'x';
    this.props.selectPlayer(e.target.value, playerTwo);
  }

  render() {
    return (
      <div className="select-piece">
        <div className="select">select piece</div>
        <div className="piece-buttons">
          <button value="x" onClick={this.handleChange.bind(this)}>x</button>
          <button value="o" onClick={this.handleChange.bind(this)}>o</button>
        </div>
      </div>
    );
  }
}

export default Player;
