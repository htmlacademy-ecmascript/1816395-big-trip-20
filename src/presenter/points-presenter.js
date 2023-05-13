import { render } from '../framework/render.js';
import TripPointView from '../view/trip-point-view.js';

export default class PointsPresenter {
  #pointPresenterContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({
    pointPresenterContainer,
    tripPointsModel,
    destinationsModel,
    offersModel

  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPointsModel = tripPointsModel;
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
    const tripPoints = this.#tripPointsModel.get();


    for (let i = 1; i < tripPoints.length; i++) {
      this.#renderTripPoint(
        tripPoints[i],
        this.#destinationsModel.getById(tripPoints[i].destination),
        this.#offersModel.getByType(tripPoints[i].type)
      );
    }
  }

}
