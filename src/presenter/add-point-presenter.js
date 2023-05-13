import AddNewPointView from '../view/add-new-point-view.js';

import { render } from '../render.js';

export default class AddPointPresenter {
  #pointContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;


  constructor({ pointContainer, tripPointsModel, destinationsModel, offersModel }) {
    this.#pointContainer = pointContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    const tripPoints = this.#tripPointsModel.get();
    const destinationsList = this.#destinationsModel.get();
    const offersList = this.#offersModel.get();

    render(new AddNewPointView({
      tripPoint: tripPoints[0],
      destinationsList: destinationsList,
      offersList: offersList

    }), this.#pointContainer);

  }

}
