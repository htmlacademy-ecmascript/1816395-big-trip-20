import { util } from '../util.js';
import { CONST_DATA } from '../mock/const-data.js';
import { getDestination, getDestinationList } from '../mock/destination-data';
import { getOffer, getOffersList } from '../mock/offers-data.js';
import { getTripPoints as getTripPointsList } from '../mock/point-data.js';

export default class MockDataService {
  destinations = [];
  offers = [];
  tripPoints = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.tripPoints = this.generateTripPoints();
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getTripPoints() {
    return this.tripPoints;
  }

  // generateDestinations() {
  //   return Array.from({ length: util.getRandomCount(CONST_DATA.countLimit) }, () => getDestination());
  // }

  generateDestinations() {
    return getDestinationList();
  }

  // generateOffers() {
  //   return CONST_DATA.typeTripPoint.map((type) => ({
  //     type,
  //     offers: Array.from({ length: util.getRandomCount(CONST_DATA.offersTitle.length) }, () => getOffer(util.getRandomArrayElement(CONST_DATA.offersTitle)))
  //   }));
  // }

  generateOffers() {
    return getOffersList();
  }

  generateTripPoints() {
    return getTripPointsList();
  }

}

