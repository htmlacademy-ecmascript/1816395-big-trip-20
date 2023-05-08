import { getTripPoints } from '../mock/point-data.js';


export default class TripPointsModel {
  tripPoints = getTripPoints();


  getPoints() {
    console.log(this.tripPoints)
    return this.tripPoints;
  }
}
