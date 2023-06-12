import { mockUtil } from '../utils/mock-util.js';
import { CONST_MOCK_DATA } from '../const/mock-const.js';

const getOffer = (offerTitle) => {
  const newOffer = {
    id: mockUtil.getUniqId(),
    title: offerTitle,
    price: mockUtil.getRandomPrice()
  };
  return newOffer;
};

const getOffers = () => mockUtil
  .getRandomData(CONST_MOCK_DATA.offersTitle)
  .map((offerTitle) => getOffer(offerTitle));


const getAllOffers = () => Array.from({ length: mockUtil.getRandomCount(CONST_MOCK_DATA.countLimit) }, (element = {
  'type': mockUtil.getRandomValue(CONST_MOCK_DATA.typeOffers),
  'offers': getOffers()
}) => element);


const offers = getAllOffers();


const getOffersList = () => offers;


export { offers, getOffersList };
