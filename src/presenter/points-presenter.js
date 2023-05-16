import TripPointView from '../view/trip-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointsPresenter {
  #pointPresenterContainer = null;
  #tripPoint = null;
  #destination = null;
  #offerTripPoint = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} tripPoint Объект с сущностью модели точек путешествия
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} offerTripPoint Объект с сущностью модели дополнительных предложений
   */

  constructor({
    pointPresenterContainer,
    tripPoint,
    destination,
    offerTripPoint

  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPoint = tripPoint;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
  }

  /**
   * Метод инициализации призентора
   */

  init() {

    this.#renderTripPoint();
  }

  /**
   * Метод создает экземпляр компонента ripPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} offers сущность дополнительных предложения точки путешествия
   */

  #renderTripPoint() {
    const tripPointComponent = new TripPointView({
      tripPoint: this.#tripPoint,
      destination: this.#destination,
      offer: this.#offerTripPoint
    });

    render(tripPointComponent, this.#pointPresenterContainer);
  }


}
