import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import Title from './Title/Title';
import Lightbox from './Lightbox/Lightbox';

class Listing extends Component {
  render() {
    return (
      <div key={this.props.keyVal} className='Comics'>
        <div className='ItemContent'>
          <Title
            item={this.props.listing.gsx$item.$t}
            currentSearch={this.props.listing.gsx$currentsearch.$t}
            soldSearch={this.props.listing.gsx$soldsearch.$t}
          />
          <Aux>
            {this.props.listing.gsx$sold1link.$t !== '' ? (
              <p>
                <span>
                  <b>Sold for: </b>
                </span>
                <span>
                  <a href={this.props.listing.gsx$sold1link.$t}>
                    ${this.props.listing.gsx$sold1.$t}
                  </a>
                  {this.props.listing.gsx$sold2link.$t !== '' && (
                    <span>
                      <span>, </span>
                      <a href={this.props.listing.gsx$sold2link.$t}>
                        ${this.props.listing.gsx$sold2.$t}
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
          </Aux>

          <Aux>
            {this.props.listing.gsx$current1.$t !== '' ? (
              <p>
                <span>
                  <b>Current listing: </b>
                </span>
                <span>
                  <a href={this.props.listing.gsx$current1link.$t}>
                    ${this.props.listing.gsx$current1.$t}
                  </a>
                </span>
              </p>
            ) : (
              <p>
                <b>No current listings</b>
              </p>
            )}
          </Aux>

          <Aux>
            {this.props.listing.gsx$closetolink.$t !== '' ? (
              <p>
                <span>
                  <b>Close to: </b>
                </span>
                <span>
                  <a href={this.props.listing.gsx$closetolink.$t}>
                    ${this.props.listing.gsx$closeto.$t}
                  </a>
                </span>
              </p>
            ) : (
              <p>
                <b>No "other" listing</b>
              </p>
            )}
          </Aux>

          <Aux>
            {this.props.listing.gsx$notes.$t !== '' ? (
              <p className='Notes'>
                <b>Notes: </b>
                <i>{this.props.listing.gsx$notes.$t}</i>
              </p>
            ) : (
              <p>
                <b>No notes</b>
              </p>
            )}
          </Aux>

          <Lightbox
            pic={this.props.listing.gsx$pic.$t}
            itemTitle={this.props.listing.gsx$item.$t}
          />
        </div>
      </div>
    );
  }
}

export default Listing;
