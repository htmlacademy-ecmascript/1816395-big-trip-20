import { TripFiltersView } from './view/trip-filters-view.js';
import { render } from './render.js';

const siteMainElement = document.querySelector('body');
const siteHeaderElement = siteMainElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');

render(new TripFiltersView(), filterContainerElement);

