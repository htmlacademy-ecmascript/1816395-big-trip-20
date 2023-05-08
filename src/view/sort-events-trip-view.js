import { CONST_DATA } from '../mock/const-data.js';
import { createElement } from '../render.js';

function createTripSortItemTemplate(sortItem) {
  return (/*html*/`
    <div class="trip-sort__item  trip-sort__item--${sortItem.toLowerCase}">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
      <label class="trip-sort__btn" for="sort-day">${sortItem}</label>
    </div>
`);
}

function createTripSortItemsTemplate(sortItems) {
  let sortItemsTemplate = '';
  sortItems.forEach((sortItem) => {
    sortItemsTemplate = sortItemsTemplate + createTripSortItemTemplate(sortItem);
  });
  return sortItemsTemplate;
}

function createTripSortTemplate() {
  return (/*html*/
    `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        ${createTripSortItemsTemplate(CONST_DATA.sortItems)}
    </form>
    `
  );
}

export default class SortsEventsTripView {
  getTemplate() {
    return createTripSortTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
