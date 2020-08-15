import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    comics: [],
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
    return (
      <div className='App'>
        {this.state.comics.map((comic, index) => (
          <div key={comic.id.$t} className='Comics'>
            {/* <p>{comic.gsx$booktitle.$t}</p>
            <p>{comic.gsx$_cokwr.$t}</p>
            <p>{comic.gsx$qual.$t}</p>
            <p>{comic.gsx$year.$t}</p>
            <p>{comic.gsx$publisher.$t}</p>
            <p>{comic.gsx$majordefects.$t}</p>
            <p>{comic.gsx$sold.$t}</p>             */}

            <p>{comic.gsx$item.$t}</p>
            <a href={comic.gsx$sold1link.$t}>
              <p>Sold for: {comic.gsx$sold1.$t}</p>
            </a>
            <a href={comic.gsx$closetolink.$t}>
              <p>Close to: {comic.gsx$closeto.$t}</p>
            </a>
            <p>Notes: {comic.gsx$notes.$t}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
