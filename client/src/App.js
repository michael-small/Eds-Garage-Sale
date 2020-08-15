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
        <h1>Our unsold stock</h1>
        <p>Total Items: {this.state.comics.length}</p>
        {this.state.comics.map((comic, index) => (
          <div key={comic.id.$t} className='Comics'>
            <h4>{comic.gsx$item.$t}</h4>
            <div className='ItemContent'>
              {comic.gsx$sold1link.$t != '' ? (
                <p>
                  <span>Sold for: </span>
                  <span>
                    <a href={comic.gsx$sold1link.$t}>${comic.gsx$sold1.$t}</a>
                  </span>
                </p>
              ) : (
                <p>No recorded sale</p>
              )}
              {comic.gsx$closetolink.$t != '' ? (
                <p>
                  <span>Close to: </span>
                  <span>
                    <a href={comic.gsx$closetolink.$t}>
                      ${comic.gsx$closeto.$t}
                    </a>
                  </span>
                </p>
              ) : (
                <p>No other listing</p>
              )}
              {comic.gsx$notes.$t != '' ? (
                <p className='Notes'>Notes: {comic.gsx$notes.$t}</p>
              ) : (
                <p>No notes</p>
              )}
            </div>

            <div className='ItemPicture'>
              {comic.gsx$pic.$t.includes('drive.google') > 0 ? (
                <iframe src={comic.gsx$pic.$t} width='50%'></iframe>
              ) : (
                <img
                  src='https://via.placeholder.com/100x150'
                  wdith='50%'
                  class='placeholder'
                ></img>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
