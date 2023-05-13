import TripListEventsView from '../view/trip-events-list-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointsPresenter from './points-presenter.js';
import AddPointPresenter from './add-point-presenter.js';

import { render, RenderPosition } from '../render.js';


export default class ContentPresenter {
  #contentComponent = new TripListEventsView();
  #sortComponent = new SortsEventsTripView();

  #contentContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({
    contentContainer,
    tripPointsModel,
    destinationsModel,
    offersModel,
  }) {
    this.#contentContainer = contentContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;

  }

  init() {
    const contentBox = this.#contentComponent.getElement();
    render(this.#contentComponent, this.#contentContainer);
    render(this.#sortComponent, contentBox, RenderPosition.AFTERBEGIN);

    const addPointPresenter = new AddPointPresenter({
      pointContainer: contentBox,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    addPointPresenter.init();

    const pointsPresenter = new PointsPresenter({
      pointPresenterContainer: contentBox,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    pointsPresenter.init();

  }
}

