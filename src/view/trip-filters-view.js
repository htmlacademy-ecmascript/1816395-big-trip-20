import AbstractView from '../framework/view/abstract-view.js';


/**
 * Создает разметку для одного критерия фильтрации точек путешествия
 * @param {object} filter Объект с данными о типе фильтра
 * и количеством точек путешествия что отвечают критериям фильтра
 * @param {boolean} isChecked Проверяет на отсутствие точек путешествия которые отвечают какому то из фильтров
 * @returns Строку разметки критерия фильтрации точек путешествия
 */

function createTripFilterHTML(filter, isChecked) {
  const { type, count } = filter;

  return (/*html*/
    `
  <div class="trip-filters__filter">
    <input
      id="filter-${type}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="everything"
      ${isChecked ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-everything">${type}</label>
  </div>
  `
  );
}

/**
 * Создает разметку для критериев фильтрации точек путешествия
 * @param {Array} filters Массив с критериями фильтрации точек путешествия
 * и количеством точек путешествия что отвечают критериям фильтра
 * @returns Строку с разметкой для критериев фильтрации точек путешествия
 */

function createTripFilterListHTML(filters) {
  return filters
    .map((filter, index) => createTripFilterHTML(filter, index === 0))
    .join('');
}

/**
 * Создает шаблон с разметкой для критериев фильтрации точек путешествия
 * @param {Array} filters Массив с критериями фильтрации точек путешествия
 * и количеством точек путешествия что отвечают критериям фильтра
 * @returns Строку с разметкой шаблона для критериев фильтрации точек путешествия
 */

function createTripFiltersTemplate(filters) {
  const tripFilterListHTML = createTripFilterListHTML(filters);

  return (/*html*/
    `
      <form class="trip-filters" action="#" method="get">
        ${tripFilterListHTML}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    `
  );
}

/**
 * Класс для управления компонентом для отрисовки TripFiltersView
 */
export default class TripFiltersView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  /**
   * Метод возвращает шаблон с разметкой для критериев фильтрации точек путешествия
   */

  get template() {
    return createTripFiltersTemplate(this.#filters);
  }

}

