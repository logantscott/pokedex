import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        searchString: null,
        perPage: 20
      }

      updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        this.setState({
            searchString: searchParams.get("pokemon") || ""
        });
      }

    handleSubmit = e => {
        const form = document.querySelector("form");
        if (e) e.preventDefault();
        const formData = new FormData(form);
        
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        // searchParams.set("type", formData.get("type"));
        searchParams.set("pokemon", formData.get("search"));
        searchParams.set("page", 1);

        window.location.hash = searchParams.toString();
    }

    handleSearch = e => {
        this.setState({ searchString: e.target.value });
    };

    handleEnter = e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        this.handleSubmit();
    }
    }

    handlePerPage = (e) => {
        this.setState({perPage: e.target.value})
    }


    render() {
      return (
        <form id="apiStuff" onSubmit={this.handleSubmit}>
          <label> Search: </label>
          <input type="text" name="search" className="searchtext" onChange={this.handleTextUpdate} onKeyDown={this.handleEnter}>
          </input>
          <button name="search" onClick={this.handleSearch} value={this.state.searchString}>Search</button>
          <select defaultValue={this.state.perPage} onChange={this.handlePerPage} value={this.state.perPage}>
            <option value="8">8</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </form>
      )
    }
    
}

// updatePage(increment) {
//     const queryString = window.location.hash.slice(1);
//     const searchParams = new URLSearchParams(queryString);
//     searchParams.set("page", this.state.page + increment);
//   }