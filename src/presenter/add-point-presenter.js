import AddNewPointView from '../view/add-new-point-view.js';

import { render } from '../render.js';

export default class AddPointPresenter {
  addPointComponent = new AddNewPointView();

  constructor({pointContainer,tripPoints}) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
  }

  init() {
    render(this.addPointComponent, this.pointContainer);
  }

}
