import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

const InfoMarker = props => {
  return (
    <Marker
      onClick={() => props.handleClick(props.index)}
      defaultZIndex={0}
      position={props.position}
      icon={{
        path:
          'M24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z',
        anchor: new window.google.maps.Point(10, 10),
        size: new window.google.maps.Size(10, 10),
        fillColor: props.color || '#ff4040',
        fillOpacity: props.isOpen ? 1 : 0.75,
        strokeWeight: 0,
        scale: 0.5,
        animation: window.google.maps.Animation.DROP
      }}
    />
  );
};

InfoMarker.defaultProps = {
  color: '',
  departureTime: '',
  isOpen: false
};

InfoMarker.propTypes = {
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
};

export default InfoMarker;
