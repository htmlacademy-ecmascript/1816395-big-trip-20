import HeaderPresenter from '../presenter/header-presenter.js';
import ContentPresenter from './content-presenter.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const infoContainerElement = siteHeaderElement.querySelector('.trip-main');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');


export default class MainPresenter {
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({ tripPointsModel, destinationsModel, offersModel }) {
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.tripPoints = this.#tripPointsModel.tripPoints;
    this.destinationsList = this.#destinationsModel.destinations;
    this.offersList = this.#offersModel.offers;

    const headerPresenter = new HeaderPresenter({
      headerContainer: filterContainerElement,
      infoContainer: infoContainerElement,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel:  this.#destinationsModel,
      offersModel: this.#offersModel
    });
    const contentPresenter = new ContentPresenter({
      contentContainer: tripEventsElement,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel:  this.#destinationsModel,
      offersModel: this.#offersModel
    });

    // console.log(this.destinationsList,this.tripPoints)
    headerPresenter.init();
    contentPresenter.init();
  }
}
