import { createElement } from '../render.js';
import { util } from '../util.js';

function createTripEventInfoTemplate(destinationsList, tripPoints) {
  const generateInfoDestinations = (destinations) => {
    const destinationsNames = util.getDestinationNames(destinations);
    let infoTagContent = '';
    destinationsNames.forEach((element, index) => {
      if (index === destinationsNames.length - 1) {
        infoTagContent = `${infoTagContent} ${element}`;
      } else {
        infoTagContent = `${infoTagContent} ${element} &mdash; `;
      }

    });
    return infoTagContent;
  };

  const generateInfoDate = (points) =>
    `${util.humanizeDateInfo(points[0].dateFrom)}&nbsp;&mdash;&nbsp;${util.humanizeDateInfo(points[points.length - 1].dateTo)}`;


  return (/*html*/
    `
    <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${generateInfoDestinations(destinationsList)}</h1>

      <p class="trip-info__dates">${generateInfoDate(tripPoints)}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>
  `
  );
}

export default class TripEventsInfoView {
  constructor({ destinationsList, tripPoints }) {
    this.destinationsList = destinationsList;
    this.tripPoints = tripPoints;
  }

  getTemplate() {
    return createTripEventInfoTemplate(this.destinationsList, this.tripPoints);
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
