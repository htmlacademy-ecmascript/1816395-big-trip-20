import { getDestinationList } from '../mock/destination-data.js';


export default class DestinationsModel {
  destinationList = getDestinationList();


  getPoints() {
    return this.destinationList;
  }
}
