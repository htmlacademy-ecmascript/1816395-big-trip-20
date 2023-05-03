import { getDestinationList } from '../mock/destination-data.js';


export default class DestinationModel {
  destinationList = getDestinationList();


  getPoints() {
    return this.destinationList;
  }
}
