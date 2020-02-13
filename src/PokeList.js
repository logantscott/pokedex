import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {

  render() {
    return (
      <ul className="grid-container">
          {this.props.pokeData.map(pokemon => (
          <PokeItem pokemon={pokemon} />
          ))}
      </ul>
    );
  }
}