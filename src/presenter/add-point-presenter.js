import AddNewPointView from '../view/add-new-point-view.js';

import { render } from '../render.js';

export default class AddPointPresenter {

  constructor({ pointContainer, tripPoints }) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
  }

  init() {
    render(new AddNewPointView({ point: this.tripPoints[0] }), this.pointContainer);
  }

}
