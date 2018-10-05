import React, { Component } from 'react';

class PlayerOne extends Component {
  handleChange(e) {
    this.props.selectPlayerOne(e.target.value);
  }

  render() {
    return (
      <div className="select-letter">
        <input value={this.props.playerOne} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default PlayerOne;
