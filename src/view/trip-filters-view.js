import { CONST_DATA } from '../mock/const-data.js';
import { createElement } from '../render.js';

function createTripFilterTemplate(filter) {
  return (/*html*/
    `
  <div class="trip-filters__filter">
    <input id="filter-${filter.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">${filter}</label>
  </div>
  `
  );
}

function createTripFilterListTemplate(filterList) {
  let filterListTemplate = '';
  filterList.forEach(
    (filterItem) => {
      filterListTemplate = filterListTemplate + createTripFilterTemplate(filterItem);
    });
  return filterListTemplate;
}

function createTripFiltersTemplate() {
  return (/*html*/
    `
<form class="trip-filters" action="#" method="get">


    ${createTripFilterListTemplate(CONST_DATA.filters)}

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>
  `
  );
}

export default class TripFiltersView {
  getTemplate() {
    return createTripFiltersTemplate();
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

