import React, { Component } from 'react';
import Cockpit from './components/Cockpit/Cockpit';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Aux from './hoc/Aux';
import './App.css';

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
      <Aux>
        <Nav />
        <Search />
        {/* <Cockpit></Cockpit> */}
      </Aux>
    );
  }
}

export default App;
