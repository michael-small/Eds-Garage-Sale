import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

class App extends Component {
  state = {
    comics: [],
    options: {
      buttons: {
        showDownloadButton: false,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        showAutoplayButton: false,
      },
      thumbnails: {
        showThumbnails: false,
      },
    },
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
        <SimpleReactLightbox>
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

              <SRLWrapper options={this.state.options}>
                <div className='ItemPicture'>
                  {comic.gsx$pic.$t.includes('googleusercontent') > 0 ? (
                    <img
                      src={comic.gsx$pic.$t}
                      width='200px'
                      height='300px'
                      alt={comic.gsx$item.$t}
                    ></img>
                  ) : (
                    <img
                      src='https://via.placeholder.com/200x300'
                      wdith='50%'
                      class='placeholder'
                      alt='Needs an image'
                    ></img>
                  )}
                </div>
              </SRLWrapper>
            </div>
          ))}
        </SimpleReactLightbox>
      </div>
    );
  }
}

export default App;
