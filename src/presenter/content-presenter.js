import ContentView from '../view/content-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointsPresenter from './points-presenter.js';
import AddPointPresenter from './add-point-presenter.js';
import { render, RenderPosition } from '../framework/render.js';

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

  }

  /**
   * Инициализация класса ContentPresenter
   */

  init() {
    this.#render();
  }

  /**
   * Метод который создает экземпляры AddPointPresenter и PointsPresenter
   * и рендерит ContentView и SortsEventsTripView
   */

  #render() {
    const contentBox = this.#contentComponent.element;

    const addPointPresenter = new AddPointPresenter({
      pointContainer: contentBox,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    addPointPresenter.init();

    const pointsPresenter = new PointsPresenter({
      pointPresenterContainer: contentBox,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    pointsPresenter.init(contentBox);

    this.#renderComponents(contentBox);
  }

  /**
   * Метод отвечает за рендеринг ContentView и SortsEventsTripView
   * @param {object} contentBox Объект с контейнером для рендера ContentView и SortsEventsTripView
   */
  #renderComponents(contentBox) {
    render(this.#contentComponent, this.#contentContainer);
    render(this.#sortComponent, contentBox, RenderPosition.AFTERBEGIN);
  }
}

