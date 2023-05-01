import { CONST_DATA } from '../mock/const-data.js';
import { getRandomTask } from '../mock/task.js';
import { util } from '../util.js';

const POINTS_COUNT = util.getRandomCount(CONST_DATA.countLimit);

export default class TripPoints {
  tripPoints = Array.from({ length: POINTS_COUNT }, getRandomTask);

  getPoints() {
    return this.tripPoints;
  }
}
