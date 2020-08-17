import React, { Component } from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Aux from './hoc/Aux';
import './App.css';

class App extends Component {
  state = {
    comics: [],
    search: '',
  };

  async componentDidMount() {
    //fetch returns promise
    const res = await fetch(
      'https://spreadsheets.google.com/feeds/list/1upupUIm2mZA7XGqRnWYsrGJtvaWiCafqSCBrY6aO8JU/1/public/full?alt=json'
    );
    const json = await res.json();
    const entries = json.feed.entry;
    this.setState({ comics: entries });
    console.log(this.state.comics);
  }

  render() {
    let filteredComics = this.state.comics.filter((comic) => {
      return (
        comic.gsx$item.$t
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <Aux>
        <Nav />
        <Search search={this.state.search} />
        <Cockpit></Cockpit>
      </Aux>
    );
  }
}

export default App;
