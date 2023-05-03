import { util } from '../util.js';
import { CONST_DATA } from './const-data.js';

const getPictures = (city) => {
  const pictures = [];
  for (let i = 0; i < util.getRandomCount(CONST_DATA.countLimit); i++) {
    pictures[i] = {
      src: `${CONST_DATA.pictureURL}${util.getRandomPrice}`,
      description: `${city}, ${util.getRandomArrayElement(CONST_DATA.descriptionPlaces)}`
    };
  }
  return pictures;
};

const getDestination = () => {
  const city = util.getRandomArrayElement(CONST_DATA.cities);
  const newDestination = {
    id: util.getUniqId,
    description: `${city}${CONST_DATA.descriptionCity}`,
    name: city,
    pictures: getPictures(city)
  };
  return newDestination;
};

const getAllDestinations = () => {
  const allDestinations = [];
  return util.getRandomArray(allDestinations, getDestination);
};

const destinationList = getAllDestinations();

export { destinationList };

