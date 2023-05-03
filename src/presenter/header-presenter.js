import TripFiltersView from '../view/trip-filters-trip-view.js';
import TripEventsInfoView from '../view/trip-event-info-view.js';

import { render, RenderPosition } from '../render.js';

export default class HeaderPresenter {
  filterComponent = new TripFiltersView();
  infoComponent = new TripEventsInfoView();

  constructor({ headerContainer, infoContainer, tripPoints }) {
    this.headerContainer = headerContainer;
    this.infoContainer = infoContainer;
    this.tripPoints = tripPoints;
  }

  init() {
    render(this.infoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(this.filterComponent, this.headerContainer);
  }
}
