import TripListEventsView from '../view/trip-events-list-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointPresenter from './point-presenter.js';
import AddPointPresenter from './add-point-presenter.js';

import { render, RenderPosition } from '../render.js';


export default class ContentPresenter {
  contentComponent = new TripListEventsView();
  sortComponent = new SortsEventsTripView();

  constructor({ contentContainer, tripPointsModel }) {
    this.contentContainer = contentContainer;
    this.tripPointsModel = tripPointsModel;
  }

  init() {
    const contentBox = this.contentComponent.getElement();
    render(this.contentComponent, this.contentContainer);
    render(this.sortComponent, contentBox, RenderPosition.AFTERBEGIN);

    const addPointPresenter = new AddPointPresenter({ pointContainer: contentBox });
    addPointPresenter.init();
    for (let i = 0; i < 3; i++) {
      const pointPresenter = new PointPresenter({ pointContainer: contentBox });
      pointPresenter.init();
    }
  }
}

