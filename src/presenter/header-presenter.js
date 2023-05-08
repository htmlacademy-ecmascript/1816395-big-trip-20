import TripFiltersView from '../view/trip-filters-view.js';
import TripEventsInfoView from '../view/trip-event-info-view.js';

import { render, RenderPosition } from '../render.js';

export default class HeaderPresenter {


  constructor({ headerContainer, infoContainer, tripPoints, destinationsList, offersList }) {
    this.headerContainer = headerContainer;
    this.infoContainer = infoContainer;
    this.tripPoints = tripPoints;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  filterComponent = new TripFiltersView();


  init() {
    render(new TripEventsInfoView({
      destinationsList: this.destinationsList,
      offersList: this.offersList,
      tripPoints: this.tripPoints
    }), this.infoContainer, RenderPosition.AFTERBEGIN);
    render(this.filterComponent, this.headerContainer);
  }
}

