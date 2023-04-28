import TripEventsItemView from '../view/trip-events-item-view.js';

import { render } from '../render.js';

export default class PointPresenter {
  pointComponent = new TripEventsItemView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointComponent, this.pointContainer);
  }

}
