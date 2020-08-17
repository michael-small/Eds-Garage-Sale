import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <span>
          <b>Search by name: </b>
        </span>
        <input
          type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        ></input>
        <button
          onClick={() => this.setState({ search: '' })}
          style={{ color: 'red' }}
        >
          X
        </button>
      </div>
    );
  }
}

export default Search;
