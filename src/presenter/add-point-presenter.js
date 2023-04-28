import AddNewPointView from '../view/add-new-point-view.js'

import { render } from '../render.js';

export default class AddPointPresenter {
  pointComponent = new AddNewPointView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointComponent, this.pointContainer);
  }

}
