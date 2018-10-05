import React, { Component } from 'react';

class PlayerTwo extends Component {
  handleChange(e) {
    this.props.selectPlayerTwo(e.target.value);
  }

  render() {
    return (
      <div className="select-letter">
       <input value={this.props.playerTwo}
       onChange={this.handleChange.bind(this)} />
     </div>
    );
  }
}


export default PlayerTwo;
