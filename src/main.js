import { TripFiltersView } from './view/trip-filters-trip-view.js';
import { SortsEventsTripView } from './view/sort-events-trip-view.js';
import { render } from './render.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');

render(new TripFiltersView(), filterContainerElement);
render(new SortsEventsTripView(),tripEventsElement);

