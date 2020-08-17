import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    return (
      <div>
        <span>
          <b>Search by name: </b>
        </span>
        <input
          type='text'
          value={this.props.search}
          onChange={this.updateSearch.bind(this)}
        ></input>
        <button
          onClick={() => this.props.search.setState({ search: '' })}
          style={{ color: 'red' }}
        >
          X
        </button>
      </div>
    );
  }
}

export default Search;
