import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
class Listing extends Component {
  render() {
    soldListings = (
      <Aux>
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
                  <a href={comic.gsx$sold2link.$t}>${comic.gsx$sold2.$t}</a>
                </span>
              )}
            </span>
          </p>
        ) : (
          <p>
            <b>No recorded sale</b>
          </p>
        )}
      </Aux>
    );

    currentListings = (
      <Aux>
        {comic.gsx$current1.$t !== '' ? (
          <p>
            <span>
              <b>Current listing: </b>
            </span>
            <span>
              <a href={comic.gsx$current1link.$t}>${comic.gsx$current1.$t}</a>
            </span>
          </p>
        ) : (
          <p>
            <b>No current listings</b>
          </p>
        )}
      </Aux>
    );

    miscListings = (
      <Aux>
        {comic.gsx$closetolink.$t !== '' ? (
          <p>
            <span>
              <b>Close to: </b>
            </span>
            <span>
              <a href={comic.gsx$closetolink.$t}>${comic.gsx$closeto.$t}</a>
            </span>
          </p>
        ) : (
          <p>
            <b>No "other" listing</b>
          </p>
        )}
      </Aux>
    );

    notes = (
      <Aux>
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
      </Aux>
    );

    return (
      <div key={comic.id.$t} className='Comics'>
        <div className='ItemContent'>
          {soldListings}
          {currentListings}
          {miscListings}
          {notes}
        </div>
      </div>
    );
  }
}

export default Listing;
