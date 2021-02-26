
import locations from "../db/locations";
const fetchFakeData = () => {
  const newFeaturesList = [];

  locations.forEach(location => {
    newFeaturesList.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: location.coordinates,
      },
      properties: {
        id: location.id,
        name: location.name,
        adress: location.adress,
        availability: location.availability
      },
    });
  })

  return Promise.resolve({
    type: 'FeatureCollection',
    features: newFeaturesList,
  });
  // return {
  //   type: 'FeatureCollection',
  //   features: newFeaturesList,
  // }
};

export default fetchFakeData;