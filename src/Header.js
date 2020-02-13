import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div>
          <img src={this.props.image} alt="Pokedex" />
      </div>
    );
  }
}