import TripFiltersView from '../view/trip-filters-view.js';
import TripEventsInfoView from '../view/trip-event-info-view.js';

import { render, RenderPosition } from '../framework/render.js';

/**
 * Класс для управления призентора HeaderPresenter
 */

export default class HeaderPresenter {
  #headerContainer = null;
  #infoContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterComponent = new TripFiltersView();

  /**
   * Инициализация получения сущностей от MainPresenter
   * @param {object} headerContainer Объект с контейнером для отрисовки headerContainer
   * @param {object} infoContainer Объект с контейнером для отрисовки TripEventsInfoView
   * @param {object} tripPointsModel Объект с сущностью модели точек путешествия
   * @param {object} destinationsModel Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   */

  constructor({ headerContainer, infoContainer, tripPointsModel, destinationsModel, offersModel }) {
    this.#headerContainer = headerContainer;
    this.#infoContainer = infoContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  /**
   * Метод инициализации призентора
   */

  init() {
    this.#render();
  }

  /**
   * Метод который рендерит TripEventsInfoView и TripFiltersView
   */

  #render() {
    const tripPoints = this.#tripPointsModel.get();
    const destinationsList = this.#destinationsModel.get();
    const offersList = this.#offersModel.get();

    render(new TripEventsInfoView({
      destinationsList: destinationsList,
      offersList: offersList,
      tripPoints: tripPoints
    }), this.#infoContainer, RenderPosition.AFTERBEGIN);
    render(this.#filterComponent, this.#headerContainer);
  }
}
