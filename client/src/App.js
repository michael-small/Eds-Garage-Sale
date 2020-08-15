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
        {this.state.comics.map((comic, index) => (
          <div key={comic.id.$t} className='Comics'>
            <h3>{comic.gsx$item.$t}</h3>
            <div>
              {comic.gsx$sold1link.$t != '' && (
                <React.Fragment>
                  <span>Sold for: </span>
                  <span>
                    <a href={comic.gsx$sold1link.$t}>${comic.gsx$sold1.$t}</a>
                  </span>
                </React.Fragment>
              )}
              {comic.gsx$closetolink.$t != '' && (
                <div>
                  <span>Close to: </span>
                  <span>
                    <a href={comic.gsx$closetolink.$t}>
                      ${comic.gsx$closeto.$t}
                    </a>
                  </span>
                </div>
              )}
              {comic.gsx$notes.$t != '' && (
                <p className='Notes'>Notes: {comic.gsx$notes.$t}</p>
              )}
            </div>

            {comic.gsx$pic.$t.includes('drive.google') > 0 && (
              <iframe src={comic.gsx$pic.$t} width='50%'></iframe>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
