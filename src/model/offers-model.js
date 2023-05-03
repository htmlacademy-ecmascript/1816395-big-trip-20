import { getOffersList } from '../mock/offers-data.js';


export default class OffersModel {
  offersList = getOffersList();


  getOffersList() {
    return this.offersList;
  }
}
