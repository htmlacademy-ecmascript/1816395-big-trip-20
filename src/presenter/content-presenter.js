import ContentView from '../view/content-view.js';
import SortsEventsTripView from '../view/sort-events-trip-view.js';
import PointPresenter from './point-presenter.js';
import AddPointPresenter from './add-point-presenter.js';
import { render, RenderPosition, replace } from '../framework/render.js';
import AbstractView from '../framework/view/abstract-view.js';

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
    this.#renderContent();
  }

  /**
   * Метод отвечает за рендеринг ContentView и SortsEventsTripView
   * @param {object} contentBox Объект с контейнером для рендера ContentView и SortsEventsTripView
   */

  #renderComponents(contentBox) {
    render(this.#contentComponent, this.#contentContainer);
    render(this.#sortComponent, contentBox, RenderPosition.AFTERBEGIN);
  }

  /**
   * Метод который создает экземпляры AddPointPresenter и PointsPresenter
   * и рендерит ContentView и SortsEventsTripView
   */

  #renderContent() {
    const contentBox = this.#contentComponent.element;

    // this.#renderAddPointPresenter(contentBox);
    this.#renderTripPoints(contentBox);

    this.#renderComponents(contentBox);
  }

  /**
   * Метод который рендерит AddPointPresenter
   * @param {object} contentBox Объект с компонентов в котором будет проходить рендер AddPointPresenter
   */

  #renderAddPointPresenter(contentBox) {
    const addPointPresenter = new AddPointPresenter({
      pointContainer: contentBox,
      tripPointsModel: this.#tripPointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    addPointPresenter.init();
  }

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

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToTripPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const addPointPresenter = new AddPointPresenter({
      pointPresenterContainer: contentBox,
      tripPoint,
      destination,
      offerTripPoint,
      onFormSubmit: () => {
        replaceFormToTripPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }

    });

    const pointPresenter = new PointPresenter({
      pointPresenterContainer: contentBox,
      tripPoint,
      destination,
      offerTripPoint,
      onEditClick: () => {
        addPointPresenter.init();
        replaceTripPointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });


    function replaceFormToTripPoint() {
      replace(pointPresenter.tripPointComponent, addPointPresenter.addPointComponent);
    }

    function replaceTripPointToForm() {
      replace(addPointPresenter.addPointComponent, pointPresenter.tripPointComponent);
    }

    pointPresenter.init();
  }
}
