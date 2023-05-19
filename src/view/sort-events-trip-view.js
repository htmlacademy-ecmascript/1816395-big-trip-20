import AbstractView from '../framework/view/abstract-view.js';
import { CONST_COMMON_DATA } from '../const/common-const.js';

/**
 * Возвращает разметку критерия сортировки точек путешествия
 * @param {string} sortItem Строка с названием критерия сортировки
 * @returns Строку с разметкой критерия сортировки точек путешествия
 */

function createTripSortItemHTML(sortItem) {
  return (/*html*/`

    <div class="trip-sort__item  trip-sort__item--${sortItem.toLowerCase()}">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
      <label class="trip-sort__btn" for="sort-day">${sortItem}</label>
    </div>

`);
}

/**
 * Создает строку разметки всех критериев сортировки точек путешествия
 * @param {Array} sortItems Массив с критериями сортировки точек путешествия
 * @returns Строку с разметкой критериев сортировки точек путешествия
 */

function createTripSortItemsHTML(sortItems) {
  return sortItems
    .map((sortItem) => createTripSortItemHTML(sortItem))
    .join('');
}

/**
 * Создает шаблон разметки критериев сортировки
 * @returns Строку с шаблоном разметки критериев сортировки
 */

function createTripSortTemplate() {
  const sortItems = CONST_COMMON_DATA.sortItems;

  const tripSortItemsHTML = createTripSortItemsHTML(sortItems);

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

export default class SortsEventsTripView extends AbstractView {
  constructor() {
    super();
  }

  /**
   * Метод для получения шаблона разметки критериев сортировки точек путешествия
   */

  get template() {
    return createTripSortTemplate();
  }

}
