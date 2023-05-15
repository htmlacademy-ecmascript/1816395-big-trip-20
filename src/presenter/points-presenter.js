import TripPointView from '../view/trip-point-view.js';
import { render } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointsPresenter {
  #pointPresenterContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} tripPointsModel Объект с сущностью модели точек путешествия
   * @param {object} destinationsModel Объект с сущностью модели пунктов назначения
   * @param {object} offersModel Объект с сущностью модели дополнительных предложений
   */

  constructor({
    pointPresenterContainer,
    tripPointsModel,
    destinationsModel,
    offersModel

  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  /**
   * Метод инициализации призентора
   */

  init() {

    this.#renderPointsPresenter();
  }

  /**
   * Метод создает экземпляр компонента ripPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} offers сущность дополнительных предложения точки путешествия
   */

  #renderTripPoint(tripPoint, destination, offers) {
    const tripPointComponent = new TripPointView({
      tripPoint: tripPoint,
      destination: destination,
      offer: offers
    });

    render(tripPointComponent, this.#pointPresenterContainer);
  }

  /**
   * метод который управляет рендером  всех компонентов TripPointView
   */

  #renderPointsPresenter() {
    const tripPoints = this.#tripPointsModel.tripPoints;

    for (let i = 1; i < tripPoints.length; i++) {
      this.#renderTripPoint(
        tripPoints[i],
        this.#destinationsModel.getById(tripPoints[i].destination),
        this.#offersModel.getByType(tripPoints[i].type)
      );
    }
  }

}
