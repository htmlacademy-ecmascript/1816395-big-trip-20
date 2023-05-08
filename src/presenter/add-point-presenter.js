import AddNewPointView from '../view/add-new-point-view.js';

import { render } from '../render.js';

export default class AddPointPresenter {

  constructor({ pointContainer, tripPoints, destinationsList, offersList }) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  init() {
    render(new AddNewPointView({
      tripPoint: this.tripPoints[0],
      destinationsList: this.destinationsList,
      offersList: this.offersList

    }), this.pointContainer);

  }

}
