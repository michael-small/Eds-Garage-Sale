import React, { Component } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

class Lightbox extends Component {
  render() {
    return (
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
    );
  }
}

export default Lightbox;
