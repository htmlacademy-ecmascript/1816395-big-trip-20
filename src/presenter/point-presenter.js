import TripEventsItemView from '../view/trip-events-item-view.js';

import { render } from '../render.js';

export default class PointPresenter {

  constructor({ pointContainer, tripPoints }) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
  }

  init() {
    for (let i = 1; i < this.tripPoints.length; i++) {
      render(
        new TripEventsItemView({ tripPoint: this.tripPoints[i] }),
        this.pointContainer);
    }
  }

}
