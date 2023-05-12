import { render } from '../framework/render.js';
import TripPointView from '../view/trip-point-view.js';

export default class PointsPresenter {
  #pointPresenterContainer = null;
  #tripPoints = null;
  #destinationsList = null;
  #offersList = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({
    pointPresenterContainer,
    tripPoints,
    destinationsList,
    offersList,
    destinationsModel,
    offersModel
  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPoints = tripPoints;
    this.#destinationsList = destinationsList;
    this.#offersList = offersList;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#renderPointsPresenter();
  }

  #renderTripPoint(tripPoint, destination, offers) {
    const tripPointComponent = new TripPointView({
      tripPoint: tripPoint,
      destination: destination,
      offer: offers
    });

    render(tripPointComponent, this.#pointPresenterContainer);
  }

  #renderPointsPresenter() {
    for (let i = 1; i < this.#tripPoints.length; i++) {
      this.#renderTripPoint(
        this.#tripPoints[i],
        this.#destinationsModel.getById(this.#tripPoints[i].destination),
        this.#offersModel.getByType(this.#tripPoints[i].type)
      );
    }
  }

}
