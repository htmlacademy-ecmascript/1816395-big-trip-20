import TripEventsInfoView from '../view/trip-event-info-view.js';

import { render, RenderPosition, remove } from '../framework/render.js';
import FilterPresenter from './filter-presenter.js';
import { TripPointCoastView } from '../view/trip-point-coast-view.js';

/**
 * Класс для управления призентора HeaderPresenter
 */

export default class HeaderPresenter {
  #filterContainer = null;
  #infoContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filters = null;
  #component = null;
  #costComponent = null;

  #filterPresenter = null;

  /**
   * Инициализация получения сущностей от MainPresenter
   * @param {object} filterContainer Объект с контейнером для отрисовки filterContainer
   * @param {object} infoContainer Объект с контейнером для отрисовки TripEventsInfoView
   * @param {object} tripPointsModel Объект с сущностью модели точек путешествия
   * @param {object} destinationsModel Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   */

  constructor({
    filterContainer,
    infoContainer,
    tripPointsModel,
    destinationsModel,
    offersModel,
    filters
  }) {
    this.#filterContainer = filterContainer;
    this.#infoContainer = infoContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filters = filters;
  }

  /**
   * Метод инициализации призентора
   */

  init() {
    if (this.#component) {
      remove(this.#component);
    }

    if(this.#costComponent){
      remove(this.#costComponent);
    }
    this.#setComponent();


    this.#setCostComponent();

    this.#render();
  }

  /**
   * Метод который рендерит TripEventsInfoView и TripFiltersView
   */

  #render() {
    this.#renderFilterPresenter();
    this.#renderTripInfoComponent();
    this.#renderTripPointsCostComponent();

  }

  /**
   * Метод который инициализирует FilterPresenter
   */

  #renderFilterPresenter() {
    if (!this.#filterPresenter) {
      this.#filterPresenter = new FilterPresenter({ filterContainer: this.#filterContainer });
    }

    this.#filterPresenter.init(this.#filters);
  }

  #renderTripInfoComponent() {
    render(this.#component, this.#infoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderTripPointsCostComponent() {

    const tripPointCoastComponentContainer = this.#component.element;
    render(this.#costComponent, tripPointCoastComponentContainer);
  }

  #setComponent() {
    const tripPoints = this.#tripPointsModel.tripPoints;
    const destinationsIds = tripPoints.map((tripPoint) => tripPoint.destination);
    const destinationsList = destinationsIds.map((destinationId) => this.#destinationsModel.getById(destinationId));
    const offersList = this.#offersModel.offers;

    this.#component = new TripEventsInfoView({
      destinationsList: destinationsList,
      offersList: offersList,
      tripPoints: tripPoints
    });
  }

  #setCostComponent() {
    const tripPoints = this.#tripPointsModel.tripPoints;
    this.#costComponent = new TripPointCoastView({
      tripPoints: tripPoints,
      offersModel: this.#offersModel
    });
  }

  get component() {
    return this.#component;
  }


}
