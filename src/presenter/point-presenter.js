import TripPointView from '../view/trip-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointPresenter {
  #pointPresenterContainer = null;
  #tripPoint = null;
  #destination = null;
  #offerTripPoint = null;
  #onEditClick = null;
  #tripPointComponent = null;

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
    offerTripPoint,
    onEditClick

  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPoint = tripPoint;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
    this.#onEditClick = onEditClick;
  }

  /**
   * Метод инициализации призентора
   */

  init() {
    this.#setTripPointComponent();
    this.#renderTripPoint();
  }

  /**
   * Метод создает экземпляр компонента TripPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} offers сущность дополнительных предложения точки путешествия
   */

  #renderTripPoint() {
    render(this.#tripPointComponent, this.#pointPresenterContainer);
  }


  #setTripPointComponent() {
    this.#tripPointComponent = new TripPointView({
      tripPoint: this.#tripPoint,
      destination: this.#destination,
      offer: this.#offerTripPoint,
      onEditClick: this.#onEditClick
    });
  }

  get tripPointComponent() {
    return this.#tripPointComponent;
  }

}
