import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

// carousel library requires calling carousel.setDimenions to size the carousel
// correctly. Otherwise this would be a function.
class Slider extends PureComponent {
  render() {
    return (
      <Carousel
        ref={c => (this.carousel = c)}
        heightMode={'max'}
        renderBottomCenterControls={false}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="slider__button slider__button--prev"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <title>arrow-left2</title>
              <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z" />
            </svg>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="slider__button slider__button--next"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <title>arrow-right2</title>
              <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z" />
            </svg>
          </button>
        )}
      >
        {this.props.images.map((asset, idx) => (
          <img
            src={asset.url}
            key={idx}
            alt={asset.alt_text || this.props.name}
            onLoad={
              // on the last image, call the carousel's
              // setDimensions function, otherwise,
              // library won't assign the right height
              idx === this.props.images.length - 1
                ? () => this.carousel.setDimensions()
                : () => {}
            }
          />
        ))}
      </Carousel>
    );
  }
}

Slider.defaultProps = {
  images: [],
  name: ''
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt_text: PropTypes.string.isRequired
  })),
  name: PropTypes.string
};

export default Slider;
