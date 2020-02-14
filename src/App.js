import React, { Component } from 'react';
import './App.css';
import pokedexImg from './pokedex.png';
import request from 'superagent';
import { getPokedex } from "./services/pokedex-api.js";
import './Pokedex.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Search from './Search.js';

export default class App extends Component {
  state = {
    pokedex: [],
    count: 0
  }

  async loadPokedex() {
    console.log("hmmm");
    const response = await getPokedex();
    const pokedex = response.results;
    const count = response.count;
    console.log("||", pokedex);
    this.setState({ pokedex, count });
  }

  // https://alchemy-pokedex.herokuapp.com

  async componentDidMount() {
    window.location.hash = 'sort=id';

    await this.loadPokedex();

    window.addEventListener("hashchange", async () => {
      console.log("change");
      await this.loadPokedex();
    });
  }



  // updatePage(increment) {
  //   const queryString = window.location.hash.slice(1);
  //   const searchParams = new URLSearchParams(queryString);
  //   searchParams.set("page", this.state.page + increment);
  // }

  render() {

    return (
      <div className="App">
        <Header image={pokedexImg} />
        <Search />
        <PokeList pokedex={this.state.pokedex ? this.state.pokedex : []} />
      </div>
    );
  }
}