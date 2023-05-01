import { getRandomPeriod, util } from '../util.js';
import { CONST_DATA } from '../mock/const-data.js';

const getOffer = (offerTitle) => {
  const newOffer = {
    id: util.getUniqId(),
    title: offerTitle,
    price: util.getRandomPrice()
  };
  return newOffer;
};

const getOffers = () => {
  const newOffers = [];
  for (let i = 0; i < util.getRandomCount(CONST_DATA.offers.length); i++) {
    newOffers[i] = getOffer(CONST_DATA.offers[i]);
  }
  return newOffers;
};

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
      getOffers()
    ],
    type: util.getRandomArrayElement(CONST_DATA.typeTripPoint)
  };
  return tripPoint;
};
