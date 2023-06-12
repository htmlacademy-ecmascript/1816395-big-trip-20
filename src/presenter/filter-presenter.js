import { render, remove } from '../framework/render.js';
import TripFiltersView from '../view/trip-filters-view.js';


/**
 * Класс призентора управляющего рендером FilterPresenter
 */

export default class FilterPresenter {
  #filterContainer = null;
  #component = null;


  /**
   * Инициализация получения сущностей от HeaderPresenter
   * @param {object} filterContainer  объект с контейнером для FilterPresenter
   */
  constructor({ filterContainer }) {
    this.#filterContainer = filterContainer;
  }

  /**
   * Метод инициализации FilterPresenter
   * @param {Array} filters Массив с критериями фильтрации точек путешествия
   * и количеством точек путешествия что отвечают критериям фильтра
   */

  init(filters) {
    if (this.#component) {
      remove(this.#component);
    }
    this.#setComponent(filters);
    this.#render();
  }

  /**
   * Метод рендера FilterPresenter
   */
  #render() {
    render(this.#component, this.#filterContainer);
  }

  /**
   * Инициализация компонента TripFiltersView
   * @param {Array} filters Массив с критериями фильтрации точек путешествия
   * и количеством точек путешествия что отвечают критериям фильтра
   */

  #setComponent(filters) {
    this.#component = new TripFiltersView({
      filters
    });
  }

  /**
   * Метод который возвращает компонент призентора
   */

  get component() {
    return this.#component;
  }

}
