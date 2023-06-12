import ContentView from '../view/content-view.js';
import SortsTripPintsView from '../view/sort-trip-points-view.js';
import PointPresenter from './point-presenter.js';
// import AddPointPresenter from './add-point-presenter.js';
import EditPointPresenter from './edit-point-presenter.js';
import { render } from '../framework/render.js';
import { commonUtil } from '../utils/common-util.js';
import { CONST_COMMON_DATA } from '../const/common-const.js';
import { sortUtil } from '../utils/sort-utils.js';

/**
 * Класс призентора управляющего созданием экземпляров AddPointPresenter и PointsPresenter
 * и рендером ContentView и SortsTripPintsView
 */

export default class ContentPresenter {
  #contentComponent = new ContentView();
  #sortComponent = null;
  #SortTypes = CONST_COMMON_DATA.sortTypes;


  #contentContainer = null;
  #contentBox = null;
  #tripPointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #headerPresenter = null;

  #tripPointPresenters = new Map();
  #tripPoints = [];
  #currentSortType = null;
  #sortedTripPoints = [];

  constructor({
    contentContainer,
    tripPointsModel,
    destinationsModel,
    offersModel,
    headerPresenter
  }) {
    this.#contentContainer = contentContainer;
    this.#tripPointsModel = tripPointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#headerPresenter = headerPresenter;
    this.#tripPoints = sortUtil[this.#SortTypes.DAY]([...this.#tripPointsModel.tripPoints]);

    this.#contentBox = this.#contentComponent.element;
    this.#currentSortType = this.#SortTypes.DAY;
  }

  /**
   * Инициализация класса ContentPresenter
   */

  init() {
    this.#renderContent();
  }

  /**
* Метод который создает экземпляры AddPointPresenter и PointsPresenter
* и рендерит ContentView и SortsTripPintsView
*/

  #renderContent() {
    this.#renderTripPoints();
    this.#renderComponents();
  }

  /**
* Метод отвечает за рендеринг ContentView и SortsTripPintsView
*/

  #renderComponents() {
    this.#sortComponent = new SortsTripPintsView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#contentContainer);
    render(this.#contentComponent, this.#contentContainer);
  }

  /**
* Метод который рендерит PointsPresenter
*/

  #renderTripPoints() {
    const tripPoints = this.#tripPoints;

    tripPoints.forEach((tripPoint) => {
      this.#renderTripPoint(
        this.#contentBox,
        tripPoint,
        this.#destinationsModel.getById(tripPoint.destination),
        this.#offersModel.getByType(tripPoint.type),
        this.#destinationsModel,
        this.#offersModel
      );
    });
  }


  #createEditPointPresenter(
    contentBox,
    destination,
    availableOfferTripPoint,
    destinationsModel,
    offersModel
  ) {
    return new EditPointPresenter({
      pointPresenterContainer: contentBox,
      destination,
      availableOfferTripPoint,
      destinationsModel,
      offersModel
    });
  }

  #createPointPresenter(
    contentBox,
    editPointPresenter,
    destinationsModel,
    offersModel,

    onTripPointUpdate,
    onViewChange,
  ) {
    return new PointPresenter({
      pointPresenterContainer: contentBox,
      editPointPresenter,
      destinationsModel,
      offersModel,

      onTripPointUpdate,
      onViewChange,

    });
  }

  /**
   * Метод рендера pointPresenter
   * @param {object} contentBox Объект с элементом контейнера отрисовки pointPresenter
   * @param {object} tripPoint Объект с сущностью точки путешествия
   * @param {object} destination Объект с сущностью точки путешествия
   * @param {object} availableOfferTripPoint Объект с выбранными дополнительными предложениями точки путешествия
   */


  #renderTripPoint(
    contentBox,
    tripPoint,
    destination,
    availableOfferTripPoint,
    destinationsModel,
    offersModel
  ) {

    const editPointPresenter = this.#createEditPointPresenter(
      contentBox,
      destination,
      availableOfferTripPoint,
      destinationsModel,
      offersModel
    );


    const pointPresenter = this.#createPointPresenter(
      contentBox,
      editPointPresenter,
      this.#destinationsModel,
      this.#offersModel,

      this.#handleTripPointUpdate,
      this.#handleViewChange,
    );

    pointPresenter.init(tripPoint);
    this.#tripPointPresenters.set(tripPoint.id, pointPresenter);
  }

  /**
   * Метод который сортирует точки путешествий по типу
   * @param {string} sortType Строка с типом сортировки
   */

  #sortTripPoints = (sortType) => {
    this.#currentSortType = this.#SortTypes[sortType];
    this.#tripPoints = sortUtil[this.#currentSortType](this.#tripPoints);
  };


  /**
   * Метод который обновляет данные в точке путешествия
   * @param {object} updatedTripPoint Объект с обновленными данными тоски путешествия
   */

  #handleTripPointUpdate = (updatedTripPoint) => {

    this.#tripPoints = commonUtil.updateTripPoint(this.#tripPoints, updatedTripPoint);
    this.#tripPointsModel.update(this.#tripPoints);
    this.#sortedTripPoints = commonUtil.updateTripPoint(this.#sortedTripPoints, updatedTripPoint);
    this.#tripPointPresenters.get(updatedTripPoint.id).init(updatedTripPoint);
    this.#clearTripPoints();
    this.#renderTripPoints(this.#contentComponent.element);
    this.#headerPresenter.init();

  };

  /**
   * Метод который обрабатывает события смены типа сортировки
   * @param {string} sortType Строка с типом сортировки
   */

  #handleSortTypeChange = (sortType) => {
    this.#sortTripPoints(sortType);
    this.#clearTripPoints();
    this.#renderTripPoints(this.#contentComponent.element);
  };


  /**
 * Метод который следит что бы только одна точка путешествия была открыта в режиме редактирования
 */

  #handleViewChange = () => {
    this.#tripPointPresenters.forEach((tripPointPresenter) => tripPointPresenter.resetView());
  };


  /**
   * Метод который удаляет  ненужные призенторы
   */

  #clearTripPoints() {
    this.#tripPointPresenters.forEach((presenter) => presenter.destroy());
    this.#tripPointPresenters.clear();
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
}
