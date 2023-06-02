import EditPointView from '../view/edit-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером EditPointPresenter
 */

export default class EditPointPresenter {
  #pointPresenterContainer = null;

  #destination = null;
  #availableOfferTripPoint = null;

  #onFormSubmit = null;
  #onCloseEditClick = null;

  #component = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} availableOfferTripPoint Объект с сущностью модели дополнительных предложений
   */

  constructor({ pointPresenterContainer, destination, availableOfferTripPoint }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#availableOfferTripPoint = availableOfferTripPoint;
  }

  /**
   * Метод инициализации призентора
   * @param {object} tripPoint Объект с сущностью точки путешествия
   * @param {object} onFormSubmit Объект с функцией обработчика подтверждения формы редактирования
   * @param {object} onCloseEditClick Объект с функцией обработчика закрытия формы редактирования
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
      availableOffersTripPoint: this.#availableOfferTripPoint,
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
