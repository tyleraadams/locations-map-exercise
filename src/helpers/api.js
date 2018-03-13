const jsonp = require('jsonp-promise');

const LOCATIONS_ENDPOINT = 'https://getbento.com/api/locations_excercise/';

export function fetchLocations() {
  return jsonp(LOCATIONS_ENDPOINT).promise;
}
