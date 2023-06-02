import AbstractView from '../framework/view/abstract-view.js';
import { CONST_COMMON_DATA } from '../const/common-const.js';

/**
 * Возвращает разметку критерия сортировки точек путешествия
 * @param {string} sortItem Строка с названием критерия сортировки
 * @returns Строку с разметкой критерия сортировки точек путешествия
 */

function createTripSortItemHTML(sortItem) {
  return (/*html*/`

    <div class="trip-sort__item  trip-sort__item--${sortItem}">
      <input id="sort-${sortItem}"
          class="trip-sort__input  visually-hidden"
          data-sort-type="${sortItem.toLocaleUpperCase()}"
          type="radio" name="trip-sort"
          value="sort-${sortItem}"
          ${sortItem === 'event' || sortItem === 'offers' ? 'disabled' : ''}
          >
      <label class="trip-sort__btn" for="sort-${sortItem}">${sortItem}</label>
    </div>

`);
}

/**
 * Создает строку разметки всех критериев сортировки точек путешествия
 * @param {Array} sortItems Массив с критериями сортировки точек путешествия
 * @returns Строку с разметкой критериев сортировки точек путешествия
 */

function createTripSortItemsHTML(sortItems, tripPoints) {
  return sortItems
    .map((sortItem) => createTripSortItemHTML(sortItem, tripPoints))
    .join('');
}

/**
 * Создает шаблон разметки критериев сортировки
 * @returns Строку с шаблоном разметки критериев сортировки
 */

function createTripSortTemplate(sortTypes, tripPoints) {
  const sortItems = Object.values(sortTypes);

  const tripSortItemsHTML = createTripSortItemsHTML(sortItems, tripPoints);

  return (/*html*/
    `
      <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        ${tripSortItemsHTML}
      </form>
    `
  );
}


/**
* Класс для управления компонентом для отрисовки SortsEventsTripView
*/

export default class SortsTripPointsView extends AbstractView {
  #handleSortTypeChange = null;
  #sortInputs = null;

  constructor({ onSortTypeChange }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.#sortInputs = this.element.querySelectorAll('input');

    this.element.addEventListener('click', this.#sortTypeChangeHandler);

  }


  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      this.#handleSortTypeChange(evt.target.dataset.sortType);
    }
  };

  /**
   * Метод для получения шаблона разметки критериев сортировки точек путешествия
   */

  get template() {
    const sortTypes = CONST_COMMON_DATA.sortTypes;
    return createTripSortTemplate(sortTypes);
  }

}
