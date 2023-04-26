import { TripFiltersView } from './view/trip-filters-trip-view.js';
import { SortsEventsTripView } from './view/sort-events-trip-view.js';
import { AddNewPointView } from './view/add-new-point-view.js';
import { EditPointView } from './view/edit-point-view.js';
import { TripEventsItemView } from './view/trip-events-item-view.js';
import { render } from './render.js';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = siteBodyElement.querySelector('.page-header');
const filterContainerElement = siteHeaderElement.querySelector('.trip-controls__filters');
const tripEventsElement = siteBodyElement.querySelector('.trip-events');
const tripEventContainerElement = siteBodyElement.querySelector('.trip-events__list');

render(new TripFiltersView(), filterContainerElement);
render(new SortsEventsTripView(), tripEventsElement, 'afterbegin');
render(new AddNewPointView(), tripEventContainerElement);
render(new EditPointView(), tripEventContainerElement);
render(new TripEventsItemView(),tripEventContainerElement);
render(new TripEventsItemView(),tripEventContainerElement);
render(new TripEventsItemView(),tripEventContainerElement);

