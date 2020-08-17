import React, { Component } from 'react';
import Listings from './Listings/Listings';

class Cockpit extends Component {
  render() {
    return (
      <div>
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
        <Listings />
      </div>
    );
  }
}

export default Cockpit;
