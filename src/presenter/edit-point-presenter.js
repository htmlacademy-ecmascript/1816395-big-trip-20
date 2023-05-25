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
   */

  constructor({ pointPresenterContainer, destination, offerTripPoint }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
  }

  /**
   * Метод инициализации призентора
   */

  init(
    tripPoint,
    onFormSubmit,
    onCloseEditClick
  ) {
    this.#onFormSubmit = onFormSubmit;
    this.#onCloseEditClick = onCloseEditClick;
    this.#setComponent(tripPoint);
    this.#renderEditPointView();
  }

  /**
   * Метод рендерит компонент renderEditPointView
   */

  #renderEditPointView() {

    render(this.#component, this.#pointPresenterContainer);
  }

  /**
   * Метод создает экземпляр компонента AddNewPointView
   * @param {object} tripPoint Сущность точки путешествия
   * @param {object} destination Сущность пункта назначения точки путешествия
   * @param {object} availableOffersTripPoint Сущность дополнительных предложения точки путешествия
   * @param {object} onFormSubmit Функция которая будет выполняться при подтверждении формы
   * @param {object} onCloseEditClick Функция которая будет выполняться при нажатии на кнопку закрытия формы

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
