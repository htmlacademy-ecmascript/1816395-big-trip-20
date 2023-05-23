import AbstractView from '../framework/view/abstract-view.js';
import { commonUtil } from '../utils/common-util.js';

/**
 * Составляет разметку для DOM элемента дополнительного предложения
 * @param {object} offer Дополнительное предложение
 * @returns строку с HTML разметкой дополнительного предложения
 */

function createOfferHTML(offer) {

  const offerTitle = offer.title;
  const offerPrice = offer.price;

  return (/*html*/
    `
  <li class="event__offer">
    <span class="event__offer-title">${offerTitle}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offerPrice}</span>
  </li>
`
  );
}

/**
 * Составляет разметку для DOM элемента со списком дополнительные предложений
 * @param {Array} tripPointOffersIds массив с идентификаторами выбранными в точке путешествия
 * @param {Array} offers массив дополнительных предложений
 * @returns строку с HTML разметкой для списка дополнительных предложений
 */

function createOffersHtml(tripPointOffersIds, offers) {
  return offers
    .map((offer) =>
      tripPointOffersIds.find((id) => offer.id === id) ?
        createOfferHTML(offer)
        : '')
    .join('');
}

/**
 * Составляет шаблон точки путешествия
 * @param {object} tripPoint точка путешествия
 * @param {Array} destinationList список пунктов назначения
 * @param {Array} offersList список дополнительных предложений
 * @returns строку с разметкой шаблона
 */

function createTripEventTemplate(tripPoint, destination, offers) {

  const dateStartTrip = tripPoint.dateFrom;
  const dateEndTrip = tripPoint.dateTo;

  const dateInfoStartTrip = commonUtil.humanizeDateInfo(dateStartTrip);
  const datePointStartTrip = commonUtil.humanizeDatePoint(dateStartTrip);
  const datePointEndTrip = commonUtil.humanizeDatePoint(dateEndTrip);
  const tripExtension = commonUtil.getPeriodExtension(tripPoint);


  const favoriteClassName = tripPoint.isFavorite
    ? 'event__favorite-btn--active'
    : [];

  const type = tripPoint.type.toLowerCase();
  const tripPrice = tripPoint.basePrice;

  const destinationName = destination.name;
  const offersById = offers;
  const tripPointOffersIds = tripPoint.offers;


  const offersHtml = createOffersHtml(tripPointOffersIds, offersById);
  return (/*html*/
    `
    <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateStartTrip}">${dateInfoStartTrip}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destinationName}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateStartTrip}">${datePointStartTrip}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateEndTrip}">${datePointEndTrip}</time>
        </p>
        <p class="event__duration">${tripExtension}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${tripPrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offersHtml}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
    `
  );
}

/**
 * Класс для управления компонентом для отрисовки точки путешествия
 */

export default class TripPointView extends AbstractView {
  #tripPoint = null;
  #destination = null;
  #offers = null;
  #handleEditClick = null;

  /**
   * Инициализация данных из Points-presenter
   * @param {object} tripPoint Точка путешествия
   * @param {Array} destination Пункт назначения
   * @param {object} offer Объект дополнительных предложений одного типа
   * @param {object} onEditClick Объект с функцией которая будет срабатывать при событии клика

   */

  constructor({ tripPoint, destination, offer, onEditClick }) {
    super();
    this.#tripPoint = tripPoint;
    this.#destination = destination;
    this.#offers = offer.offers;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  /**
   * Получение шаблона точки путешествия
   */

  get template() {
    return createTripEventTemplate(
      this.#tripPoint,
      this.#destination,
      this.#offers
    );
  }

  /**
   * Метод описывает приватный обработчик события и используется стрелочная функция, что бы this
   * у функции был по месту вызова функции
   * @param {object} evt Объект события (Элемент, на котором сработал обработчик)
   */

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

}
