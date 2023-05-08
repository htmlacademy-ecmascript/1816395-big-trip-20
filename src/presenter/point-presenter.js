import TripEventsItemView from '../view/trip-events-item-view.js';

import { render } from '../render.js';

export default class PointPresenter {

  constructor({ pointContainer, tripPoints, destinationsList, offersList }) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  init() {
    for (let i = 1; i < this.tripPoints.length; i++) {
      render(
        new TripEventsItemView({
          tripPoint: this.tripPoints[i],
          destinationsList: this.destinationsList,
          offersList: this.offersList
        }),
        this.pointContainer);
    }
  }

}
