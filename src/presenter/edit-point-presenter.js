import EditPointView from '../view/edit-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером EditPointPresenter
 */

export default class EditPointPresenter {
  #pointPresenterContainer = null;
  #destination = null;
  #offerTripPoint = null;

  #onFormSubmit = null;
  #onCloseEditClick = null;

  #component = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   * @param {object} onFormSubmit Объект функцией которая будет срабатывать при подтверждении формы
   */

  constructor({ pointPresenterContainer, destination, offerTripPoint, onFormSubmit, onCloseEditClick }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
    this.#onFormSubmit = onFormSubmit;
    this.#onCloseEditClick = onCloseEditClick;
  }

  /**
   * Метод инициализации призентора
   */

  init(tripPoint) {
    this.#setComponent(tripPoint);
    this.#renderEditPointView();
  }

  /**
   * Метод рендерит компонент AddNewPointView
   */

  #renderEditPointView() {

    render(this.#component, this.#pointPresenterContainer);
  }

  /**
   * Метод создает экземпляр компонента AddNewPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} availableOffersTripPoint сущность дополнительных предложения точки путешествия
   */

  #setComponent(tripPoint) {
    this.#component = new EditPointView({
      tripPoint,
      destination: this.#destination,
      availableOffersTripPoint: this.#offerTripPoint,
      onFormSubmit: this.#onFormSubmit,
      onCloseEditClick: this.#onCloseEditClick
    });
  }

  /**
   * Метод возвращает экземпляр компонента AddNewPointView
   */

  get component() {
    return this.#component;
  }


}
