import { getRandomPeriod, util } from '../util.js';
import { CONST_DATA } from './const-data.js';


const getTripPoint = () => {
  const randomPeriod = getRandomPeriod();
  const tripPoint = {

    id: util.getUniqId(),
    basePrice: util.getRandomPrice(),
    dateFrom: randomPeriod[0],
    dateTo: randomPeriod[1],
    destination: util.getRandomArrayElement(CONST_DATA.cities),
    isFavorite: util.getRandomBooleanValue,
    offers: [

    ],
    type: util.getRandomArrayElement(CONST_DATA.typeTripPoint)
  };
  return tripPoint;
};

const getTripPoints = () => {
  const tripPoints = [];
  for (let i = 0; i < util.getRandomCount(CONST_DATA.countLimit); i++) {
    tripPoints.push(getTripPoint());
  }
  return tripPoints;
};

const getNewTripPoint = () => getNewTripPoint();

const newTrip = getTripPoints();

const getRandomTripPoint = () => util.getRandomArrayElement(newTrip);

export { getTripPoints, getNewTripPoint, getRandomTripPoint };
