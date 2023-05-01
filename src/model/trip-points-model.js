import { CONST_DATA } from '../mock/const-data.js';
import { getNewTripPoint } from '../mock/mock-data.js';

import { util } from '../util.js';

const POINTS_COUNT = util.getRandomCount(CONST_DATA.countLimit);

export default class TripPointsModel {
  tripPoints = Array.from({ length: POINTS_COUNT }, getNewTripPoint);

  getPoints() {
    return this.tripPoints;
  }
}
