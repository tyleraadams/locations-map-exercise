import React from 'react';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';

import Map from '../components/map/map';
import Info from '../components/info/info';
import Layout from '../components/layout/layout';

import { fetchLocations } from '../models/api';
import buildDataWithLatLon from '../utils/get_lat_lon';

class App extends React.Component {
  constructor() {
    super();

    this.processMarkers = this.processMarkers.bind(this);
    this.setActiveMarker = this.setActiveMarker.bind(this);
    this.state = {
      processedMarkers: [],
      isLoading: true
    };
  }

  setActiveMarker(idx) {
    this.setState({
      activeMarker: idx
    });
  }

  componentDidMount() {
    fetchLocations()
      .then(response => {
        this.rawMarkers = response;
      })
      .catch(error => console.error(error));
  }

  processMarkers() {
    buildDataWithLatLon(this.rawMarkers).then(locationData => {
      const processedMarkers = locationData.map((location, index) => {
        const latLon = get(location, `[0].geometry.location`);
        const lat = latLon ? latLon.lat() : null;
        const lng = latLon ? latLon.lng() : null;
        return lat
          ? Object.assign({}, this.rawMarkers[index], {
            position: { lat, lng }
          })
          : null;
      });

      this.setState({ processedMarkers, isLoading: false });
    });
  }

  render() {
    return (
      <Layout>
        {!isUndefined(this.state.activeMarker) ? (
          <Info {...this.state.processedMarkers[this.state.activeMarker]} />
        ) : (
          <p>Select a restaurant on the map to get started</p>
        )}

        <Map
          markers={this.state.processedMarkers}
          processMarkers={this.processMarkers}
          isLoading={this.state.isLoading}
          setActiveMarker={this.setActiveMarker}
          activeMarker={this.state.activeMarker}
        />
      </Layout>
    );
  }
}

export default App;
