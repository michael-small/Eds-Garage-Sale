import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
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
    );
  }
}

export default Title;
