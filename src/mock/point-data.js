import { mockUtil } from '../utils/mock-util.js';
import { CONST_MOCK_DATA } from '../const/mock-const.js';
import { offers } from './offers-data.js';
import { destinationList, getDestinationById } from './destination-data.js';

function generateTripPointOffers(AllOffers, typeOffer) {

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

const generateTripPoint = () => {
  const randomPeriod = mockUtil.getRandomPeriod();
  const typePoint = mockUtil.getRandomValue(offers).type;
  const city = mockUtil.getRandomValue(destinationList).name;
  const tripPoint = {

    id: mockUtil.getUniqId(),
    basePrice: mockUtil.getRandomPrice(),
    dateFrom: randomPeriod[0],
    dateTo: randomPeriod[1],
    destination: getDestinationById(city),
    isFavorite: mockUtil.getRandomBooleanValue(),
    offers: generateTripPointOffers(offers, typePoint)
    ,
    type: typePoint
  };

  return tripPoint;
};

const generateTripPointsList = () => {
  const tripPoints = Array.from({ length: mockUtil.getRandomCount(CONST_MOCK_DATA.countLimit) }, () => generateTripPoint());
  return tripPoints;
};


export { generateTripPointsList };
