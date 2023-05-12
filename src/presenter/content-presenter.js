import TripListEventsView from '../view/trip-events-list-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointsPresenter from './points-presenter.js';
import AddPointPresenter from './add-point-presenter.js';

import { render, RenderPosition } from '../render.js';


export default class ContentPresenter {
  contentComponent = new TripListEventsView();
  sortComponent = new SortsEventsTripView();

  constructor({
    contentContainer,
    tripPoints,
    destinationsList,
    offersList,
    destinationsModel,
    offersModel
  }) {
    this.contentContainer = contentContainer;
    this.tripPoints = tripPoints;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    const contentBox = this.contentComponent.getElement();
    render(this.contentComponent, this.contentContainer);
    render(this.sortComponent, contentBox, RenderPosition.AFTERBEGIN);

    const addPointPresenter = new AddPointPresenter({
      pointContainer: contentBox,
      tripPoints: this.tripPoints,
      destinationsList: this.destinationsList,
      offersList: this.offersList
    });
    addPointPresenter.init();
    const pointsPresenter = new PointsPresenter({
      pointPresenterContainer: contentBox,
      tripPoints: this.tripPoints,
      destinationsList: this.destinationsList,
      offersList: this.offersList,
      destinationsModel: this.destinationsModel,
      offersModel: this.offersModel
    });
    pointsPresenter.init();

  }
}

