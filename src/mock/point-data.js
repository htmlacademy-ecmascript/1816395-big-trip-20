import { util } from '../util.js';
import { CONST_DATA } from './const-data.js';
import { offers } from './offers-data.js';
import { destinationList, getDestinationId } from './destination-data.js';

function getTripPointOffers(AllOffers, typeOffer) {

  function getOffersByType(type) {
    return AllOffers.find((offer) => offer.type === type);
  }

  function shuffleArray(offersAvailable) {
    return offersAvailable.sort(() => Math.random() - 0.5);
  }

  const tripPointAvailableOffer = [...getOffersByType(typeOffer).offers];
  const tripPointOffersIds = shuffleArray(tripPointAvailableOffer)
    .map((offer) => offer.id).splice(0, tripPointAvailableOffer.length - 1);
  return tripPointOffersIds;
}

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
    offers: getTripPointOffers(offers, typePoint)
    ,
    type: typePoint
  };

  return tripPoint;
};

const getTripPoints = () => {
  const tripPoints = Array.from({ length: util.getRandomCount(CONST_DATA.countLimit) }, () => getTripPoint());
  return tripPoints;
};

const getNewTripPoint = () => getNewTripPoint();


export { getTripPoints, getNewTripPoint };
