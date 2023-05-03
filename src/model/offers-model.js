import { getOffersList } from '../mock/offers-data.js';


export default class OffersModel {
  offers = getOffersList();


  getPoints() {
    return this.offers;
  }
}
