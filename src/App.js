import React, { Component } from 'react';
import './App.css';
import pokedexImg from './pokedex.png';
import request from 'superagent';
import './Pokedex.css';
import Header from './Header.js';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = {
    pokedex: [],
    searchString: null
  }

  // https://alchemy-pokedex.herokuapp.com

  handleTextUpdate = e => {
    this.setState({ searchString: e.target.value });
  };

  async componentDidMount() {
    let query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    const data = await request.get(query)

    this.setState({pokedex: data.body});
  }

handleSearch = async() => {
    let query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    query = this.state.searchString ? query + '?pokemon=' + this.state.searchString : query;
    const data = await request.get(query);

    this.setState({pokedex: data.body});
  }

  render() {

    // const filtered = (this.state.pokedex.results ? this.state.pokedex.results : [])
    // .filter(pokemon => {
    //   if (!this.state.searchString) return true;

    //   return (pokemon.pokemon.toLowerCase().includes(this.state.searchString.toLowerCase())
    // )});



    return (
      <div className="App">
        <Header image={pokedexImg} />
        <label> Search: </label>
        <input type="text" className="searchtext" onChange={this.handleTextUpdate}>
        </input>
        <button onClick={this.handleSearch}>Search</button>
        <PokeList pokedex={this.state.pokedex.results ? this.state.pokedex.results : []} />
      </div>
    );
  }
}