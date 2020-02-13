import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import './Pokedex.css';
import Header from './Header.js';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = {
    pokeData: []
  }

  // https://alchemy-pokedex.herokuapp.com

  async componentDidMount() {
    const query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const data = await request.get(query)

    this.setState({pokeData: data.body.results});
    console.log(this.state.pokeData)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PokeList pokeData={this.state.pokeData} />
      </div>
    );
  }
}