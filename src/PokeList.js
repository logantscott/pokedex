import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import shortid from 'shortid';

export default class PokeList extends Component {

  render() {
    return (
      <ul className="grid-container">
          {this.props.pokedex.map(pokemon => (
          <PokeItem pokemon={pokemon} key={shortid.generate()} />
          ))}
      </ul>
    );
  }
}