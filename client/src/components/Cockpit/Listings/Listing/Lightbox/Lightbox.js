import React, { Component } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

class Lightbox extends Component {
  state = {
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
  };
  render() {
    return (
      <SimpleReactLightbox>
        <SRLWrapper options={this.state.options}>
          <div className='ItemPicture'>
            {this.props.pic.includes('google') > 0 ? (
              <img
                src={this.props.pic}
                width='200px'
                height='300px'
                alt={this.props.itemTitle}
              ></img>
            ) : (
              <img
                src='https://via.placeholder.com/200x300'
                wdith='50%'
                alt={this.props.itemTitle}
              ></img>
            )}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    );
  }
}

export default Lightbox;
