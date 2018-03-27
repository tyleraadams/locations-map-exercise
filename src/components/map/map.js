import React from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { compose, withProps } from 'recompose';

import Marker from './marker';
import Loader from '../../components/loader/loader';

import mapSettings from './map_settings.json';
import credentials from '../../.credentials.json';

let counter = 0;

const Container = () => (
  <div className="map__container" />
);

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${
      credentials.googleMapsClient
    }&libraries=geometry,drawing,places,geocoder`,
    loadingElement: Container(),
    containerElement: Container(),
    mapElement: Container()
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { markers } = props;
  return (
    // map styles genereated with https://mapstyle.withgoogle.com/
    <GoogleMap
      {...mapSettings}
      onTilesLoaded={() => {
        // need to ensure that the google maps script has loaded
        // before calling process markers since I am using the
        // geolocation api to turn addresses into
        // lat/lng. only need to call once.
        if (counter === 0) {
          props.processMarkers();
          counter++;
        }
      }}
    >
      {markers.length && (
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {markers.map((marker, idx) => {
            return (
              marker && (
                <Marker
                  handleClick={props.setActiveMarker}
                  index={idx}
                  key={idx}
                  color={'#ff4040'}
                  {...marker}
                  isOpen={idx === props.activeMarker}
                />
              )
            );
          })}
        </MarkerClusterer>
      )}
    </GoogleMap>
  );
});

const MapWrapper = props => (
  <div className="map">
    {props.isLoading && <div className="map__loading">{Loader()}</div>}
    <Map
      markers={props.markers}
      processMarkers={props.processMarkers}
      setActiveMarker={props.setActiveMarker}
      activeMarker={props.activeMarker}
    />
  </div>
);

MapWrapper.defaultProps = {
  markers: [],
  activeMarker: -1,
  isLoading: false
};

MapWrapper.propTypes = {
  activeMarker: PropTypes.number,
  setActiveMarker: PropTypes.func.isRequired,
  processMarkers: PropTypes.func.isRequired,
  markers: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool
};

export default MapWrapper;
