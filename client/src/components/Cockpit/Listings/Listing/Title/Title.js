import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <h4 className='Title'>
        {this.props.item}
        {this.props.currentSearch !== '' && (
          <span>
            <a
              href={this.props.currentSearch}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              🛒
            </a>
          </span>
        )}
        {this.props.soldSearch !== '' && (
          <span>
            <a href={this.props.soldSearch} style={{ textDecoration: 'none' }}>
              💰
            </a>
          </span>
        )}
      </h4>
    );
  }
}

export default Title;
