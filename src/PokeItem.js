import React, { Component } from 'react';

export default class PokeItem extends Component {

  render() {
    return (
      <li className="grid-item" style={{borderColor:this.props.pokemon.color_1}}>
            <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
            <h3>{this.props.pokemon.pokemon}</h3>
            {/* <p>Types:</p> */}
            <p>
                <span style={{backgroundColor:this.props.pokemon.color_1 === 'NA' ? 'transparent' : this.props.pokemon.color_1}}>
                    {this.props.pokemon.type_1 === 'NA' ? '' : this.props.pokemon.type_1}
                </span>
                <span style={{backgroundColor:this.props.pokemon.color_2 === 'NA' ? 'transparent' : this.props.pokemon.color_2}}>
                    {this.props.pokemon.type_2 === 'NA' ? '' : this.props.pokemon.type_2}
                </span>
            </p>
      </li>
    );
  }
}