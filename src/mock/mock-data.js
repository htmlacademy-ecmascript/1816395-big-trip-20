import { getRandomPeriod, util } from '../util.js';
import { CONST_DATA } from '../mock/const-data.js';



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
    type: 'taxi'

  };
};
