import HeaderPresenter from '../presenter/header-presenter.js';
import ContentPresenter from './content-presenter.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const infoContainerElement = siteHeaderElement.querySelector('.trip-main');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');

/**
 * Класс для управления призентора MainPresenter
 */

export default class MainPresenter {
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filters = null;
  #headerPresenter = null;
  #contentPresenter = null;

  /**
   * Инициализация получений сущностей из точки входа
   * @param {object} tripPointsModel Получение модели точек путешествия из точки входа
   * @param {object} destinationsModel Получение модели пунктов назначения из точки входа
   * @param {object} offersModel Получение модели дополнительных предложений из точки входа
   * @param {Array} filters Массив с фильтрами
   */

  constructor({ tripPointsModel, destinationsModel, offersModel, filters }) {
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filters = filters;
  }

  /**
   * Инициализация HeaderPresenter и ContentPresenter
   */

  init() {
    this.tripPoints = this.#tripPointsModel.tripPoints;
    this.destinationsList = this.#destinationsModel.destinations;
    this.offersList = this.#offersModel.offers;

    this.#headerPresenter = new HeaderPresenter({
      filterContainer: filterContainerElement,
      infoContainer: infoContainerElement,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      filters: this.#filters
    });

    this.#contentPresenter = new ContentPresenter({
      contentContainer: tripEventsElement,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      filters: this.#filters
    });

    this.#headerPresenter.init();
    this.#contentPresenter.init();
  }
}
