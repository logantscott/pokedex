import React, { Component } from 'react';
import './App.css';
import pokedexImg from './pokedex.png';
import request from 'superagent';
import './Pokedex.css';
import Header from './Header.js';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = {
    pokedex: []
  }

  // https://alchemy-pokedex.herokuapp.com

  async componentDidMount() {
    const query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=17';
    const data = await request.get(query)

    this.setState({pokedex: data.body.results});
    console.log(this.state.pokedex)
  }

  render() {
    return (
      <div className="App">
        <Header image={pokedexImg} />
        <PokeList pokedex={this.state.pokedex} />
      </div>
    );
  }
}