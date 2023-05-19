import AddNewPointView from '../view/add-new-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером AddNewPointView
 */

export default class AddPointPresenter {
  #pointPresenterContainer = null;
  #tripPoint = null;
  #destination = null;
  #offerTripPoint = null;
  #onFormSubmit = null;
  #addPointComponent = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} tripPoint Объект с сущностью модели точек путешествия
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   * @param {object} onFormSubmit Объект функцией которая будет срабатывать при подтверждении формы
   */

  constructor({ pointPresenterContainer, tripPoint, destination, offerTripPoint, onFormSubmit }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPoint = tripPoint;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
    this.#onFormSubmit = onFormSubmit;
  }

  /**
   * Метод инициализации призентора
   */

  init() {
    this.#setAddPointComponent();
    this.#renderAddNewPointView();
  }

  /**
   * Метод рендерит компонент AddNewPointView
   */

  #renderAddNewPointView() {

    render(this.#addPointComponent, this.#pointPresenterContainer);
  }

  /**
   * Метод создает экземпляр компонента AddNewPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} availableOffersTripPoint сущность дополнительных предложения точки путешествия
   */

  #setAddPointComponent() {
    this.#addPointComponent = new AddNewPointView({
      tripPoint: this.#tripPoint,
      destination: this.#destination,
      availableOffersTripPoint: this.#offerTripPoint,
      onFormSubmit: this.#onFormSubmit
    });
  }

  /**
   * Метод возвращает экземпляр компонента AddNewPointView
   */

  get addPointComponent() {
    return this.#addPointComponent;
  }


}
