import TripPointView from '../view/trip-point-view.js';
import { render, replace, remove } from '../framework/render.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointPresenter {
  #pointPresenterContainer = null;
  #editPointPresenter = null;

  #destination = null;
  #offerTripPoint = null;

  #component = null;
  #tripPoint = null;


  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} offerTripPoint Объект с сущностью модели дополнительных предложений
   */

  constructor({
    pointPresenterContainer,
    destination,
    offerTripPoint,
    editPointPresenter,
  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#offerTripPoint = offerTripPoint;
    this.#editPointPresenter = editPointPresenter;
  }

  /**
   * Метод инициализации призентора
   */

  init(tripPoint) {
    this.#tripPoint = tripPoint;



    const prevTripPointComponent = this.#component;
    const prevEditTripPointComponent = this.#editPointPresenter.component;

    this.#setComponent(this.#tripPoint);

    if (prevTripPointComponent === null || prevEditTripPointComponent === null) {
      this.#renderTripPoint();
    }

    // if (this.#pointPresenterContainer.contains(prevTripPointComponent.element)) {
    //   replace(this.#component, prevTripPointComponent);
    // }

    // if (this.#pointPresenterContainer.contains(prevEditTripPointComponent.element)) {
    //   replace(this.#editPointPresenter, prevEditTripPointComponent);
    // }

    remove(prevTripPointComponent);
    remove(prevEditTripPointComponent);


  }

  #destroy() {
    remove(this.#component);
    remove(this.#editPointPresenter.component);
  }

  /**
   * Метод рендерит компонент TripPointView
   */

  #renderTripPoint() {
    render(this.#component, this.#pointPresenterContainer);
  }
  /**
   * Метод который заменяет точку путешествия на форму редактирования и добавляет прослушивание нажатия ESC
   */

  #replaceTripPointToForm() {
    replace(this.#editPointPresenter.component, this.component);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  /**
 * Метод который заменяет форму редактирования на точку путешествия и удаляет прослушивание нажатия ESC
 */

  #replaceFormToTripPoint() {
    replace(this.component, this.#editPointPresenter.component);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }


  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToTripPoint();
    }
  };

  /**
   * Метод который инициализирует форму редактирования точки путешествия и обрабатывает нажатие кнопку открытия точки путешествия
   */

  #handleEditClick = () => {

    this.#editPointPresenter.init(
      this.#tripPoint,
      this.component,
      this.#handleFormSubmit,
      this.#handleCloseClick
    );

    this.#replaceTripPointToForm();
  };

  /**
   * Метод который обрабатывает подтверждение формы редактирования
   */

  #handleFormSubmit = () => {
    this.#replaceFormToTripPoint();
  };

  /**
   * Метод который обрабатывает закрытие формы редактирование по клику на кнопку
   */

  #handleCloseClick = () => {
    this.#replaceFormToTripPoint();
  };

  /**
   * Метод создает экземпляр компонента TripPointView
   * @param {object} tripPoint сущность точки путешествия
   * @param {object} destination сущность пункта назначения точки путешествия
   * @param {object} offers сущность дополнительных предложения точки путешествия
   */

  #setComponent(tripPoint) {
    this.#component = new TripPointView({
      tripPoint,
      destination: this.#destination,
      offer: this.#offerTripPoint,
      onEditClick: this.#handleEditClick
    });
  }

  /**
   * Метод возвращает экземпляр компонента TripPointView
   */

  get component() {
    return this.#component;
  }

}
