import { util } from '../util.js';
import { CONST_DATA } from './const-data.js';

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


const getAllOffers = () => {
  const allOffers = [];
  for (let i = 0; i < util.getRandomCount(CONST_DATA.countLimit); i++) {
    allOffers[i] = {
      type: util.getRandomArrayElement(CONST_DATA.typeOffers),
      offers: getOffers()
    };
  }
  return allOffers;
};

const offers = getAllOffers();

export { offers };
