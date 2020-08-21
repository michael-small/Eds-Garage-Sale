import React, { Component } from 'react';
import Listings from './Listings/Listings';
import '../../App.css';

class Cockpit extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Our Unsold Stock</h1>
        <div>
          <h2>Total Items: {this.props.comics.length}</h2>
          <p>
            Items without sold price:{' '}
            {this.props.comics.filter((x) => x.gsx$sold1.$t === '').length}
          </p>
          <p>
            Items without pic:{' '}
            {this.props.comics.filter((x) => x.gsx$pic.$t === '').length}
          </p>
        </div>
        <Listings comics={this.props.comics} search={this.props.search} />
        {console.log(this.props.comics)}
      </div>
    );
  }
}

export default Cockpit;
