import HeaderPresenter from '../presenter/header-presenter.js';
import ContentPresenter from './content-presenter.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const infoContainerElement = siteHeaderElement.querySelector('.trip-main');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');


export default class MainPresenter {
  constructor({ tripPointsModel, destinationsModel, offersModel }) {
    this.tripPointsModel = tripPointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.tripPoints = [...this.tripPointsModel.get()];
    this.destinationsList = [...this.destinationsModel.get()];
    this.offersList = [...this.offersModel.get()];

    const headerPresenter = new HeaderPresenter({
      headerContainer: filterContainerElement,
      infoContainer: infoContainerElement,
      tripPoints: this.tripPoints,
      destinationsList: this.destinationsList,
      offersList: this.offersList
    });
    const contentPresenter = new ContentPresenter({
      contentContainer: tripEventsElement,
      tripPoints: this.tripPoints,
      destinationsList: this.destinationsList,
      offersList: this.offersList
    });

    headerPresenter.init();
    contentPresenter.init();
  }
}
