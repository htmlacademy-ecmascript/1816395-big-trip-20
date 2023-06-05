import TripPointView from '../view/trip-point-view.js';
import { render, replace, remove } from '../framework/render.js';
import { CONST_COMMON_DATA } from '../const/common-const.js';


/**
 * Класс призентора управляющего рендером TripPointView
 */

export default class PointPresenter {
  #pointPresenterContainer = null;
  #editPointPresenter = null;

  #destination = null;
  #availableOfferTripPoint = null;

  #component = null;
  #tripPoint = null;
  #view = CONST_COMMON_DATA.modeViewTripPoint.DEFAULT;

  #handleTripPointUpdate = null;

  #handleViewChange = null;

  /**
   * Инициализация получения сущностей от ContentPresenter
   * @param {object} pointPresenterContainer Объект с контейнером для отрисовки призентора
   * @param {object} destination Объект с сущностью модели пунктов назначения
   * @param {object} availableOfferTripPoint Объект с сущностью модели дополнительных предложений
   * @param {object} editPointPresenter Объект с сущностью призентора который отвечает за редактирование текущей точки путешествия
   * @param {object} onTripPointUpdate Объект с функцией обработчика события обновления данных в точке путешествия
   * @param {object} onViewChange Объект с функцией обработчика события открытия редактирования второй точки путешествия
   */

  constructor({
    pointPresenterContainer,
    destination,
    availableOfferTripPoint,
    editPointPresenter,
    onTripPointUpdate,
    onViewChange
  }) {
    this.#pointPresenterContainer = pointPresenterContainer;
    this.#destination = destination;
    this.#availableOfferTripPoint = availableOfferTripPoint;
    this.#editPointPresenter = editPointPresenter;
    this.#handleTripPointUpdate = onTripPointUpdate;
    this.#handleViewChange = onViewChange;
  }

  /**
   * Метод инициализации призентора
   * @param {object} tripPoint Объект с сущностью текущей точки путешествия
   */

  init(tripPoint) {
    this.#tripPoint = tripPoint;


    const prevTripPointComponent = this.#component;
    const prevEditTripPointComponent = this.#editPointPresenter.component;

    this.#setComponent(this.#tripPoint);

    if (prevTripPointComponent === null) {
      this.#renderTripPoint();
    } else {
      if (this.#view === CONST_COMMON_DATA.modeViewTripPoint.DEFAULT) {
        replace(this.#component, prevTripPointComponent);
      }

      if (this.#view === CONST_COMMON_DATA.modeViewTripPoint.EDITING) {
        replace(this.#editPointPresenter.component, prevEditTripPointComponent);
      }
    }

    remove(prevTripPointComponent);
    remove(prevEditTripPointComponent);
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
    this.#handleViewChange();
    this.#view = CONST_COMMON_DATA.modeViewTripPoint.EDITING;
  }

  /**
 * Метод который заменяет форму редактирования на точку путешествия и удаляет прослушивание нажатия ESC
 */

  #replaceFormToTripPoint() {
    // console.log(this.#component.element)
    replace(this.component, this.#editPointPresenter.component);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#view = CONST_COMMON_DATA.modeViewTripPoint.DEFAULT;
  }

  /**
   * Метод который обрабатывает событие нажатия клавиши ESC
   * @param {object} evt Объект с событием нажатия на клавишу
   */

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
      this.#handleFormSubmit,
      this.#handleCloseClick,

    );

    this.#replaceTripPointToForm();
  };

  /**
   * Метод который обрабатывает добавление точке путешествия избранного статуса
   */

  #handleFavoriteClick = () => {
    this.#handleTripPointUpdate({ ...this.#tripPoint, isFavorite: !this.#tripPoint.isFavorite });
  };

  /**
   * Метод который обрабатывает подтверждение формы редактирования
   */

  #handleFormSubmit = (tripPoint) => {
    this.#handleTripPointUpdate(tripPoint);
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
      offer: this.#availableOfferTripPoint,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });
  }

  /**
   * Метод возвращает экземпляр компонента TripPointView
   */

  get component() {
    return this.#component;
  }

  /**
   * Метод закрывает открытую форму редактирования точки путешествия
   */

  resetView() {
    if (this.#view !== CONST_COMMON_DATA.modeViewTripPoint.DEFAULT) {
      this.#replaceFormToTripPoint();
    }
  }

  /**
   * Метод стирает компоненты призентора
   */

  destroy() {
    remove(this.#component);
    remove(this.#editPointPresenter.component);
  }

}
