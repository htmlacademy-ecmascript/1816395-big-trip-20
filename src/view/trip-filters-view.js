import AbstractView from '../framework/view/abstract-view.js';
import { CONST_DATA } from '../mock/const-data.js';

/**
 * Создает разметку для одного критерия фильтрации точек путешествия
 * @param {string} filter Строка с названием критерия фильтрации
 * @returns Строку разметки критерия фильтрации точек путешествия
 */

function createTripFilterHTML(filter) {
  return (/*html*/
    `
  <div class="trip-filters__filter">
    <input id="filter-${filter.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">${filter}</label>
  </div>
  `
  );
}

/**
 * Создает разметку для критериев фильтрации точек путешествия
 * @param {Array} filterList Массив с критериями фильтрации точек путешествия
 * @returns Строку с разметкой для критериев фильтрации точек путешествия
 */

function createTripFilterListHTML(filterList) {
  return filterList
    .map((filter) => createTripFilterHTML(filter))
    .join('');
}

/**
 * Создает шаблон с разметкой для критериев фильтрации точек путешествия
 * @returns Строку с разметкой шаблона для критериев фильтрации точек путешествия
 */

function createTripFiltersTemplate() {
  const filtersList = CONST_DATA.filters;
  const tripFilterListHTML = createTripFilterListHTML(filtersList);

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
  constructor() {
    super();
  }

  /**
   * Метод возвращает шаблон с разметкой для критериев фильтрации точек путешествия
   */

  get template() {
    return createTripFiltersTemplate();
  }

}

