import TripPointView from '../view/trip-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointPresenter {
  #pointPresenterContainer = null;
  #destination = null;
  #offerTripPoint = null;
  #onEditClick = null;
  #component = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} offerTripPoint Объект с сущностью модели дополнительных предложений
   * @param {object} onEditClick Объект функцией которая будет срабатывать при событии клика

   */

  constructor({
    pointPresenterContainer,
    destination,
    offerTripPoint,
    onEditClick
  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
    this.#onEditClick = onEditClick;
  }

  /**
   * Метод инициализации призентора
   */

  init(tripPoint) {
    this.#setComponent(tripPoint);
    this.#renderTripPoint();
  }

  /**
   * Метод рендерит компонент TripPointView
   */

  #renderTripPoint() {
    render(this.#component, this.#pointPresenterContainer);
  }

  /**
   * Метод создает экземпляр компонента TripPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} offers сущность дополнительных предложения точки путешествия
   */

  #setComponent(tripPoint) {
    this.#component = new TripPointView({
      tripPoint: tripPoint,
      destination: this.#destination,
      offer: this.#offerTripPoint,
      onEditClick: this.#onEditClick
    });
  }

  /**
   * Метод возвращает экземпляр компонента TripPointView
   */

  get component() {
    return this.#component;
  }

}
