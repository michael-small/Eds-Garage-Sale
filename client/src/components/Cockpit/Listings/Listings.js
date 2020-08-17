import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

class Listings extends Component {
  render() {
    return (
      <Aux>
        {filteredComics.reverse().map((comic, index) => (
          <p>{comic}</p>
        ))}
      </Aux>
    );
  }
}

export default Listings;
