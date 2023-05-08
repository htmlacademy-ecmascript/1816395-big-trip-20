import { util } from '../util.js';
import { CONST_DATA } from './const-data.js';
import { offers, getOffersId } from './offers-data.js';
import { destinationList, getDestinationId } from './destination-data.js';


const getTripPoint = () => {
  const randomPeriod = util.getRandomPeriod();
  const typePoint = util.getRandomArrayElement(offers).type;
  const city = util.getRandomArrayElement(destinationList).name;
  const tripPoint = {

    id: util.getUniqId(),
    basePrice: util.getRandomPrice(),
    dateFrom: randomPeriod[0],
    dateTo: randomPeriod[1],
    destination: getDestinationId(city),
    isFavorite: util.getRandomBooleanValue(),
    offers: [
      getOffersId(typePoint)
    ],
    type: typePoint
  };
  return tripPoint;
};

const getTripPoints = () => Array.from({ length: util.getRandomCount(CONST_DATA.countLimit) }, () => getTripPoint());

const getNewTripPoint = () => getNewTripPoint();


export { getTripPoints, getNewTripPoint };
