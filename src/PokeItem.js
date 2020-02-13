import React, { Component } from 'react';

export default class PokeItem extends Component {

  render() {
    return (
      <li className="grid-item">
          <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
          <h3>{this.props.pokemon.pokemon}</h3>
          <p>Type 1:&nbsp;&nbsp;{this.props.pokemon.egg_group_1}</p>
          <p>Type 2:&nbsp;&nbsp;{this.props.pokemon.egg_group_2}</p>
      </li>
    );
  }
}