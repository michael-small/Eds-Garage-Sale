import React, { Component } from 'react';
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
      caption: {
        captionFontSize: '2rem',
      },
    },
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

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
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
      <div className='App'>
        <h1>Our Unsold Stock</h1>
        <div>
          <h2>Total Items: {this.state.comics.length}</h2>
          <p>
            Items without sold price:{' '}
            {this.state.comics.filter((x) => x.gsx$sold1.$t === '').length}
          </p>
          <p>
            Items without pic:{' '}
            {this.state.comics.filter((x) => x.gsx$pic.$t === '').length}
          </p>
        </div>

        <div>
          <span>
            <b>Search by name: </b>
          </span>
          <input
            type='text'
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          ></input>
        </div>
        {filteredComics.reverse().map((comic, index) => (
          <div key={comic.id.$t} className='Comics'>
            <h4>
              {comic.gsx$item.$t}
              {comic.gsx$currentsearch.$t !== '' && (
                <span>
                  <a
                    href={comic.gsx$currentsearch.$t}
                    style={{ textDecoration: 'none' }}
                  >
                    {' '}
                    🛒
                  </a>
                </span>
              )}
              {comic.gsx$soldsearch.$t !== '' && (
                <span>
                  <a
                    href={comic.gsx$soldsearch.$t}
                    style={{ textDecoration: 'none' }}
                  >
                    💰
                  </a>
                </span>
              )}
            </h4>
            <div className='ItemContent'>
              {comic.gsx$sold1link.$t !== '' ? (
                <p>
                  <span>
                    <b>Sold for: </b>
                  </span>
                  <span>
                    <a href={comic.gsx$sold1link.$t}>${comic.gsx$sold1.$t}</a>
                    {comic.gsx$sold2link.$t !== '' && (
                      <span>
                        <span>, </span>
                        <a href={comic.gsx$sold2link.$t}>
                          ${comic.gsx$sold2.$t}
                        </a>
                      </span>
                    )}
                  </span>
                </p>
              ) : (
                <p>
                  <b>No recorded sale</b>
                </p>
              )}
              {comic.gsx$current1.$t !== '' ? (
                <p>
                  <span>
                    <b>Current listing: </b>
                  </span>
                  <span>
                    <a href={comic.gsx$current1link.$t}>
                      ${comic.gsx$current1.$t}
                    </a>
                  </span>
                </p>
              ) : (
                <p>
                  <b>No current listings</b>
                </p>
              )}
              {comic.gsx$closetolink.$t !== '' ? (
                <p>
                  <span>
                    <b>Close to: </b>
                  </span>
                  <span>
                    <a href={comic.gsx$closetolink.$t}>
                      ${comic.gsx$closeto.$t}
                    </a>
                  </span>
                </p>
              ) : (
                <p>
                  <b>No "other" listing</b>
                </p>
              )}
              {comic.gsx$notes.$t !== '' ? (
                <p className='Notes'>
                  <b>Notes: </b>
                  <i>{comic.gsx$notes.$t}</i>
                </p>
              ) : (
                <p>
                  <b>No notes</b>
                </p>
              )}
            </div>
            <SimpleReactLightbox>
              <SRLWrapper options={this.state.options}>
                <div className='ItemPicture'>
                  {comic.gsx$pic.$t.includes('google') > 0 ? (
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
                      alt={comic.gsx$item.$t}
                    ></img>
                  )}
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
