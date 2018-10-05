import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className="header-bar">
        {this.props.playerOne} - Tic Tac Toe - {this.props.playerTwo}
      </header>
    );
  }
}

export default Header;
