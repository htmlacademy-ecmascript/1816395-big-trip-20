import { getTripPoints } from '../mock/point-data.js';


export default class TripPointsModel {
  tripPoints = getTripPoints();


  getPoints() {
    return this.tripPoints;
  }
}
