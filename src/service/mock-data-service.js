import { getDestinationList } from '../mock/destination-data';
import { getOffersList } from '../mock/offers-data.js';
import { generateTripPointsList } from '../mock/point-data.js';

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

  generateDestinations() {
    return getDestinationList();
  }

  generateOffers() {
    return getOffersList();
  }

  generateTripPoints() {
    return generateTripPointsList();
  }

}

