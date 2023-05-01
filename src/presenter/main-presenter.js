import HeaderPresenter from '../presenter/header-presenter.js';
import ContentPresenter from './content-presenter.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const infoContainerElement = siteHeaderElement.querySelector('.trip-main');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');


export default class MainPresenter {
  constructor({ tripPointsModel }) {
    this.tripPointsModel = tripPointsModel;
  }

  init() {
    this.tripPoints = [...this.tripPointsModel.getPoints()];
    const headerPresenter = new HeaderPresenter({
      headerContainer: filterContainerElement,
      infoContainer: infoContainerElement,
      tripPoints: this.tripPoints
    });
    const contentPresenter = new ContentPresenter({
      contentContainer: tripEventsElement,
      tripPoints: this.tripPoints
    });

    headerPresenter.init();
    contentPresenter.init();
  }
}
