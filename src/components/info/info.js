import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../slider/slider';

const Info = props => (
  <div className="info">
    <h2>
      <span>{props.name}</span>
    </h2>
    <p className="info__city">
      {props.city}, {props.state}
    </p>
    <address className="info__address">{props.address}</address>
    {props.images.length === 1 && (
      <img
        src={props.images[0].url}
        alt={props.images[0].alt_text || props.name}
        className="info__image"
      />
    )}
    {props.images.length > 1 && (
      <div className="info__slider-container">
        <Slider images={props.images} name={props.name} />
      </div>
    )}
    <div
      className="info__hours"
      dangerouslySetInnerHTML={{ __html: props.hours }}
    />
  </div>
);

Info.defaultProps = {
  city: '',
  state: '',
  hours: '',
  address: '',
  images: []
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt_text: PropTypes.string.isRequired
    })
  )
};

export default Info;
