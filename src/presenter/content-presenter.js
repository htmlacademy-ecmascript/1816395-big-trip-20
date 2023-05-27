import ContentView from '../view/content-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointPresenter from './point-presenter.js';
// import AddPointPresenter from './add-point-presenter.js';
import EditPointPresenter from './edit-point-presenter.js';
import { render, replace } from '../framework/render.js';
import { commonUtil } from '../utils/common-util.js';

/**
 * Класс призентора управляющего созданием экземпляров AddPointPresenter и PointsPresenter
 * и рендером ContentView и SortsEventsTripView
 */

export default class ContentPresenter {
  #contentComponent = new ContentView();
  #sortComponent = new SortsEventsTripView();


  #contentContainer = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #tripPointPresenters = new Map();
  #tripPoints = [];

  constructor({
    contentContainer,
    tripPointsModel,
    destinationsModel,
    offersModel,
  }) {
    this.#contentContainer = contentContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#tripPoints = tripPointsModel.tripPoints;

  }

  /**
   * Инициализация класса ContentPresenter
   */

  init() {
    this.#renderContent();
  }

  /**
 * Метод который создает экземпляры AddPointPresenter и PointsPresenter
 * и рендерит ContentView и SortsEventsTripView
 */

  #renderContent() {
    const contentBox = this.#contentComponent.element;

    this.#renderTripPoints(contentBox);
    this.#renderComponents(contentBox);
  }

  /**
   * Метод отвечает за рендеринг ContentView и SortsEventsTripView
   * @param {object} contentBox Объект с контейнером для рендера ContentView и SortsEventsTripView
   */

  #renderComponents() {
    render(this.#sortComponent, this.#contentContainer);
    render(this.#contentComponent, this.#contentContainer);
  }


  /**
   * Метод который рендерит AddPointPresenter
   * @param {object} contentBox Объект с компонентов в котором будет проходить рендер AddPointPresenter
   */

  // #renderAddPointPresenter(contentBox) {
  //   const addPointPresenter = new AddPointPresenter({
  //     pointContainer: contentBox,
  //     tripPointsModel: this.#tripPointsModel,
  //     destinationsModel: this.#destinationsModel,
  //     offersModel: this.#offersModel
  //   });
  //   addPointPresenter.init();
  // }

  #handleTripPointUpdate = (updatedTripPoint) => {
    this.#tripPoints = commonUtil.updateTripPoint(this.#tripPoints, updatedTripPoint);
    this.#tripPointPresenters.get(updatedTripPoint.id).init(updatedTripPoint);
  };

  /**
 * Метод который рендерит PointsPresenter`
 * @param {object} contentBox Объект с компонентов в котором будет проходить рендер PointsPresenter
 */


  #renderTripPoints(contentBox) {
    const tripPoints = this.#tripPointsModel.tripPoints;

    for (let i = 0; i < tripPoints.length; i++) {
      this.#renderTripPoint(
        contentBox,
        tripPoints[i],
        this.#destinationsModel.getById(tripPoints[i].destination),
        this.#offersModel.getByType(tripPoints[i].type)
      );
    }

  }


  #renderTripPoint(contentBox, tripPoint, destination, offerTripPoint,) {

    const editPointPresenter = new EditPointPresenter({
      pointPresenterContainer: contentBox,
      tripPoint,
      destination,
      offerTripPoint,
    });


    const pointPresenter = new PointPresenter({
      pointPresenterContainer: contentBox,
      destination,
      offerTripPoint,
      editPointPresenter,
      onTripPointUpdate: this.#handleTripPointUpdate
    });


    pointPresenter.init(tripPoint);
    this.#tripPointPresenters.set(tripPoint.id, pointPresenter);
  }

  #clearTripPoints() {
    this.#tripPointPresenters.forEach((presenter) => presenter.destroy());
    this.#tripPointPresenters.clear();
  }


}
