import {mockUtil} from '../utils/mock-util.js';
import { CONST_MOCK_DATA } from '../const/mock-const.js';

const generatePictures = (city) => Array.from({ length: mockUtil.getRandomCount(CONST_MOCK_DATA.countLimit) }, (picture = {
  'src': `${CONST_MOCK_DATA.pictureURL}${mockUtil.getRandomPrice()}`,
  'description': `${city}, ${mockUtil.getRandomValue(CONST_MOCK_DATA.descriptionPlaces)}`
}) => picture);

const getDestination = () => {
  const city = mockUtil.getRandomValue(CONST_MOCK_DATA.cities);
  const newDestination = {
    id: mockUtil.getUniqId(),
    description: `${city}${CONST_MOCK_DATA.descriptionCity}`,
    name: city,
    pictures: generatePictures(city)
  };
  return newDestination;
};

const generateAllDestinations = () => {
  const allDestinations = [];
  for (let i = 0; i < mockUtil.getRandomCount(CONST_MOCK_DATA.countLimit); i++) {
    allDestinations[i] = getDestination();
  }
  return allDestinations;
};

const destinationList = generateAllDestinations();


const getDestinationById = (city) => {
  const findDestination = destinationList.find((destination) => destination.name === city);
  return findDestination.id;
};

const getDestinationList = () => destinationList;

export { destinationList, getDestinationById, getDestinationList };

