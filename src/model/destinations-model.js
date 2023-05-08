import { getDestinationList } from '../mock/destination-data.js';


export default class DestinationsModel {
  destinationList = getDestinationList();


  getDestinationsList() {
    return this.destinationList;
  }
}
