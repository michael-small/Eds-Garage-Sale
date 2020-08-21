import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h4>
        {this.props.item}
        {this.props.currentSearch !== '' && (
          <span>
            <a
              href={this.props.currentsearch}
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
