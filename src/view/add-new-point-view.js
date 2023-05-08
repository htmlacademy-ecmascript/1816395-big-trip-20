import dayjs from 'dayjs';
import { CONST_DATA } from '../mock/const-data.js';
import { createElement } from '../render.js';
import { util } from '../util.js';


function generateEventTypeBtn() {
  return (/*html*/
    `
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
`);
}

function createTypeItemTemplate(type) {
  return (/*html*/
    `
    <div class="event__type-item">
      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
      <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-taxi-1">${type}</label>
    </div>
`
  );
}

function createAvailableOfferTemplate(offer) {
  return (/*html*/`
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
    <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>

`);
}

function createAvailableOffersListTemplate(tripPoint, offersList) {
  let offersTemplate = '';
  const offersById = util.getOffersById(tripPoint.type, tripPoint.offers, offersList);
  offersById.forEach((offer) => {
    const offerTemplate = createAvailableOfferTemplate(offer);
    offersTemplate = offersTemplate + offerTemplate;
  });

  return offersTemplate;
}

function createImageTemplate(srcImage) {
  return (/*html*/`<img class="event__photo" src=${srcImage} alt="Event photo">`);
}

function createImagesTemplate(images) {
  let imagesTemplate = '';
  images.forEach(
    (image) => {
      imagesTemplate = imagesTemplate + createImageTemplate(image.src);
    }
  );
  return imagesTemplate;
}

function generateEventType(typeData) {
  let eventTypeTag = '';
  typeData.forEach((type) => {
    eventTypeTag = eventTypeTag + createTypeItemTemplate(type);
  });
  return eventTypeTag;
}

function createAddNewPointTemplate(tripPoint, destinationsList, offersList) {

  return (/*html*/
    `
    <li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    ${generateEventTypeBtn()}
                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${generateEventType(CONST_DATA.typeOffers)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
                      value=${util.getDestinationById(tripPoint.destination, destinationsList).name} list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(tripPoint.dateFrom).format(CONST_DATA.formatDateAddPoint)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(tripPoint.dateTo).format(CONST_DATA.formatDateAddPoint)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${createAvailableOffersListTemplate(tripPoint, offersList)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">
                      ${util.getDestinationById(tripPoint.destination, destinationsList).description}
                    </p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${createImagesTemplate(util.getDestinationById(tripPoint.destination, destinationsList).pictures)}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>
    `
  );
}

export default class AddNewPointView {
  constructor({ tripPoint, destinationsList, offersList }) {
    this.tripPoint = tripPoint;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  getTemplate() {
    return createAddNewPointTemplate(
      this.tripPoint,
      this.destinationsList,
      this.offersList
    );
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

