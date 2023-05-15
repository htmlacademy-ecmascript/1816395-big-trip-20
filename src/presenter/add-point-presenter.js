import AddNewPointView from '../view/add-new-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером AddNewPointView
 */

export default class AddPointPresenter {
  #pointContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointContainer Объект с контейнером для отрисовки призентора
   * @param {object} tripPointsModel Объект с сущностью модели точек путешествия
   * @param {object} destinationsModel Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   */

  constructor({ pointContainer, tripPointsModel, destinationsModel, offersModel }) {
    this.#pointContainer = pointContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  /**
   * Метод инициализации призентора
   */

  init() {
    this.#renderAddNewPointView();
  }

  /**
   * Метод рендера призентора
   */

  #renderAddNewPointView() {
    const tripPoints = this.#tripPointsModel.tripPoints;
    const tripPoint = tripPoints[0];

    render(new AddNewPointView({
      tripPoint: tripPoint,
      destination: this.#destinationsModel.getById(tripPoint.destination),
      availableOffersTripPoint: this.#offersModel.getByType(tripPoint.type)

    }), this.#pointContainer);
  }

}
