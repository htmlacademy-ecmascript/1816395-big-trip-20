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

const getOffers = () => util
  .getRandomData(CONST_DATA.offersTitle)
  .map((offerTitle) => getOffer(offerTitle));


const getAllOffers = () => Array.from({ length: util.getRandomCount(CONST_DATA.countLimit) }, (element = {
  'type': util.getRandomArrayElement(CONST_DATA.typeOffers),
  'offers': getOffers()
}) => element);


const offers = getAllOffers();
const getRandomOffersId = (type) => {
  const ids = [];
  offers.forEach((offer) => {
    if (offer.type === type) {
      ids.push(util.getRandomArrayElement(offer.offers).id);
    }
  });
  return ids;
};

const getOffersList = () => offers;


export { offers, getRandomOffersId, getOffersList };
