import TripFiltersView from '../view/trip-filters-view.js';
import TripEventsInfoView from '../view/trip-event-info-view.js';

import { render, RenderPosition } from '../render.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #infoContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterComponent = new TripFiltersView();


  constructor({ headerContainer, infoContainer, tripPointsModel, destinationsModel, offersModel }) {
    this.#headerContainer = headerContainer;
    this.#infoContainer = infoContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }


  init() {
    const tripPoints = this.#tripPointsModel.get();
    const destinationsList = this.#destinationsModel.get();
    const offersList = this.#offersModel.get();

    render(new TripEventsInfoView({
      destinationsList: destinationsList,
      offersList: offersList,
      tripPoints: tripPoints
    }), this.#infoContainer, RenderPosition.AFTERBEGIN);
    render(this.#filterComponent, this.#headerContainer);
  }
}
