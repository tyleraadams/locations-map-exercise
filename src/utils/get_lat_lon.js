const getLatLon = (address, timeout) => {
  const geocoder = window.geocoder || new window.google.maps.Geocoder();

  // only intiitalize Geocoder library once
  if (!window.geocoder) {
    window.geocoder = geocoder;
  }

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      geocoder.geocode({ address }, function(results, status) {
        if (status === 'OK') {
          resolve(results);
        } else {
          reject(status);
        }
      });
    }, timeout);
  });
};

export default markers => {
  // this is not the optimal solution, but i am throttling geocoder calls
  // to not exceed google maps api limit. i would store lat/lng data
  // in the db along with address instead of doing this on the fly on
  // the client. as you will notice when you run this, it's a VERRRRRY
  // slow
  const Promises = Promise.all(
    markers.map((marker, index) => {
      return getLatLon(marker.address, index * 500);
    })
  );
  return Promises.catch(err => {
    console.error('failed ', err);
  });
};
