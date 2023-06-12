import { CONST_COMMON_DATA } from '../const/common-const.js';
import { commonUtil } from '../utils/common-util.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

/**
 * Создание разметки всплывающего меню выбора типа поездки
 * @param {string} tripPointType Строка с типом точки путешествия
 * @returns Строку с разметкой всплывающего меню выбора типа поездки
 */

function createEventTypeWrapperHTML(tripPointType, offersModel) {

  const eventTypeBtn = createEventTypeBtnHTML(tripPointType);
  /**
   * Создает разметку кнопки типа точки путешествия
   * @param {string} type Строка с типом точки путешествия
   * @returns Строку с разметкой кнопки типа точки путешествия
   */

  function createEventTypeBtnHTML(type) {
    return (/*html*/
      `
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
`);
  }

  /**
   * Создает разметку иконки для выбора типа точки путешествия
   * @param {string} type Строка с типом точки путешествия
   * @returns Строку с разметкой иконки для выбора типа точки путешествия
   */

  function createTypeItemHTML(type) {
    const capitalizeType = commonUtil.getCapitalize(type);

    return (/*html*/
      `
      <div class="event__type-item"
        ${offersModel.getByType(type) ?
        '' :
        'hidden'
      }
      >
        <input
          id="event-type-${type}-1"
          class="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          value="${type}"
          >
        <label
          class="event__type-label  event__type-label--${type}"
          for="event-type-${type}-1"
          >
          ${capitalizeType}
        </label>
      </div>
  `
    );
  }

  /**
   * Создает разметку для всех иконок выбора типа точки путешествия
   * @param {Array} typesOffers Массив всех типов дополнительных путешествий
   * @returns Строку с разметкой всех иконок выбора типа точки путешествия
   */

  function generateEventIcon(typesOffers) {
    return typesOffers
      .map((typeOffers) => createTypeItemHTML(typeOffers))
      .join('');
  }


  return (/*html*/ `
    <div class="event__type-wrapper">
      ${eventTypeBtn}
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${generateEventIcon(CONST_COMMON_DATA.typeOffers)}
        </fieldset>
      </div>
    </div>
  `);
}

function createDestinationsOptions(destinations) {
  return destinations
    .map((destination) => `<option value="${destination.name}"></option>`)
    .join('');
}

/**
 * Создает разметку с названием пункта назначения
 * @param {string} tripPointType Строка с типом точки путешествия
 * @param {string} destinationName Строка с названием пункта назначения
 * @returns Строку с разметкой названия пункта назначения
 */

function createTripEventDestinationHTML(tripPointType, destinationName, destinationsModel) {
  const destinations = destinationsModel.destinations;
  return (/*html*/ `
  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${tripPointType}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
      value=${destinationName} list="destination-list-1">
    <datalist id="destination-list-1">
      ${createDestinationsOptions(destinations)}
    </datalist>
  </div>
  `);
}

/**
 * Создает разметку с датой пребывания в точке путешествия
 * @param {string} tripPointDateStart Строка с началом пребывания в точке путешествия
 * @param {string} tripPointDateEnd Строка с завершением пребывания в точке путешествия
 * @returns Строку с разметкой даты пребывания в точке путешествия
 */

function createTripEventTimeHTML(tripPointDateStart, tripPointDateEnd) {

  const
    eventStartTime = commonUtil.humanizeDateEditPoint(tripPointDateStart),
    eventEndTime = commonUtil.humanizeDateEditPoint(tripPointDateEnd);

  return (/*html*/ `
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${eventStartTime}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${eventEndTime}">
</div>
  `);
}

/**
 * Создает разметку с возможными и выбранными дополнительными предложениями для точки путешествия
 * @param {object} tripPoint Объект с точкой путешествия
 * @param {Array} availableOffersTripPoint Массив с доступными дополнительными предложениями для точки путешествия
 * @param {Array} offersOfTripPoint Массив выбранных дополнительных предложений в точке путешествия
 * @returns Строку с разметкой  возможных и выбранных дополнительных предложений для точки путешествия
 */

function createTripEventAvailableOffersHtml(tripPoint, offersModel) {

  const availableOffersTripPoint = offersModel.getByType(tripPoint.type);
  const tripPointsOffersIds = tripPoint.offers;

  /**
   * Метод возвращает название класса для ДОМ элемента специального предложения
   * @param {string} offerTitle Строка с названием специального предложения
   * @returns Строку с названием класса ДОМ элемента специального предложения
   */

  function createOfferClass(offerTitle) {
    const wordsOfferTitle = offerTitle.split(' ');
    if (wordsOfferTitle[wordsOfferTitle.length - 1] === 'class') {
      return wordsOfferTitle[wordsOfferTitle.length - 2];
    }
    return wordsOfferTitle[wordsOfferTitle.length - 1];
  }

  /**
   * Создает разметку с дополнительного предложения
   * @param {object} offer Объект с дополнительным предложением
   * @param {string} checked Строка с данными о статусе дополнительного предложения
   * @returns Строку с дополнительным предложением
   */

  function createAvailableOfferHtml(offer, checked) {
    const offerTitle = offer.title;
    const offerPrice = offer.price;
    const offerId = offer.id;
    const offerClass = createOfferClass(offerTitle);

    return (/*html*/`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden"
        id="event-offer-${offerClass}-1"
        type="checkbox"
        name="event-offer-luggage"
        ${checked}
        data-offer-id="${offerId}"
        >
      <label class="event__offer-label"
        for="event-offer-${offerClass}-1">
        <span class="event__offer-title">${offerTitle}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offerPrice}</span>
      </label>
    </div>

  `);
  }

  /**
   * Создает разметку всего списка дополнительных предложений для точки путешествия
   * @param {Array} tripPointOffersIds Массив с идентификаторами дополнительных предложений выбранных в точке путешествия
   * @param {object} availableOffers Объект всех дополнительных предложений для типа точки путешествия
   * @returns Строку с разметкой всех дополнительных предложений для тоски путешествия
   */

  function createAvailableOffersListHtml(tripPointOffersIds, availableOffers) {
    return availableOffers.offers.map((offer) =>
      tripPointOffersIds.find((id) => offer.id === id) ?
        createAvailableOfferHtml(offer, 'checked')
        : createAvailableOfferHtml(offer, '')
    ).join('');

  }

  return (/*html*/ `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${createAvailableOffersListHtml(tripPointsOffersIds, availableOffersTripPoint)}
    </div>
  </section>
  `);
}


/**
 * Создает разметку со стоимостью пребывания в точке путешествия
 * @param {string} tripPointPrice Строка со стоимостью
 * @returns Строку с разметкой стоимости пребывания в точке путешествия
 */
function createTripEventPriceHTML(tripPointPrice) {
  return (/*html*/ `
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro; ${tripPointPrice}
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
  </div>
  `);
}

/**
 * Создает разметку с детальной информацией о пункте назначения
 * @param {string} destinationName Строка на название пункта назначения
 * @param {string} destinationDescription Строка с описанием пункта назначения
 * @param {Array} destinationPictures Массив с адресами фотографий пункта назначения
 * @returns строку с разметкой детальной информации о пункте назначения
 */

function createTripEventDestinationDetailsHTML(destinationName, destinationDescription, destinationPictures) {

  function createImageHtml(srcImage, descriptionImage) {
    return (/*html*/`<img class="event__photo" src=${srcImage} alt=${descriptionImage}>`);
  }

  function createImagesHtml(images) {
    let imagesTemplate = '';
    images.forEach(
      (image) => {
        imagesTemplate = imagesTemplate + createImageHtml(image.src);
      }
    );
    return imagesTemplate;
  }
  return (/*html*/ `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">
      ${destinationName}
    </p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${createImagesHtml(destinationPictures, destinationDescription)}
      </div>
    </div>
  </section>
  `);
}

/**
 * Создает разметку компонента добавления или редактирования точки путешествия
 * @param {object} tripPoint Объект с сущностью точки путешествия
 * @param {object} destination Объект с сущностью пункта назначения точки путешествия
 * @param {object} availableOffersTripPoint Объект с доступными дополнительными предложениями точки путешествия
 * @returns Строку с разметкой компонента добавления или редактирования точки путешествия
 */

function createEditTripPointTemplate(
  tripPoint,
  destinationsModel,
  offersModel
) {
  const destination = destinationsModel.getById(tripPoint.destination);

  const destinationName = destination.name;
  const destinationDescription = destination.description;
  const destinationPictures = destination.pictures;
  const tripPointType = tripPoint.type;
  const tripPointDateStart = tripPoint.dateFrom;
  const tripPointDateEnd = tripPoint.dateTo;
  const tripPointPrice = tripPoint.basePrice;

  const tripEventTypeWrapperHTML = createEventTypeWrapperHTML(tripPointType, offersModel);
  const tripEventDestinationHTML = createTripEventDestinationHTML(tripPointType, destinationName, destinationsModel);
  const tripEventTimeHTML = createTripEventTimeHTML(tripPointDateStart, tripPointDateEnd);
  const tripEventPriceHTML = createTripEventPriceHTML(tripPointPrice);
  const tripEventAvailableOffersHTML = createTripEventAvailableOffersHtml(tripPoint, offersModel);
  const tripEventDestinationDetailsHTML = createTripEventDestinationDetailsHTML(destinationName, destinationDescription, destinationPictures);
  return (/*html*/
    `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${tripEventTypeWrapperHTML}

          ${tripEventDestinationHTML}

          ${tripEventTimeHTML}

          ${tripEventPriceHTML}

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">

          ${tripEventAvailableOffersHTML}

          ${tripEventDestinationDetailsHTML}

        </section>
      </form>
    </li>
    `
  );
}
export default class EditPointView extends AbstractStatefulView {
  #destinationsModel = null;
  #offersModel = null;

  #handleFormSubmit = null;
  #handleCloseEditClick = null;
  #datepickerStart = null;
  #datePickerEnd = null;

  /**
 * Инициализация данных из Points-presenter
 * @param {object} tripPoint Точка путешествия
 * @param {Array} destination Пункт назначения
 * @param {object} offer Объект дополнительных предложений одного типа
 * @param {object} handleFormSubmit Объект с функцией которая будет срабатывать при подтверждении формы
 */

  constructor({
    tripPoint,
    destinationsModel,
    offersModel,

    onFormSubmit,
    onCloseEditClick
  }) {
    super();
    this._setState(EditPointView.parseTripPointToState(tripPoint));
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;

    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseEditClick = onCloseEditClick;

    this._restoreHandlers();

  }


  /**
   * Получение шаблона точки путешествия
   */

  get template() {
    return createEditTripPointTemplate(
      this._state,
      this.#destinationsModel,
      this.#offersModel,
    );
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerStart) {
      this.#datepickerStart.destroy();
      this.#datepickerStart = null;
    }

    if (this.#datePickerEnd) {
      this.#datePickerEnd.destroy();
      this.#datePickerEnd = null;
    }
  }

  /**
   * Метод подключает слушатели событий
   */

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditClickHandler);

    this.element.querySelectorAll('.event__type-input')
      .forEach((element) => element.addEventListener('click', this.#typeClickHandler));

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.element.querySelector('.event__field-group--price')
      .addEventListener('change', this.#priceChangeHandler);

    this.element.querySelectorAll('.event__offer-selector')
      .forEach((element) => element.addEventListener('click', this.#offersClickHandler));

    this.#setDatePickers();
  }

  /**
 * Метод описывает приватный обработчик события и используется стрелочная функция, что бы this
 * у функции был по месту вызова функции
 * @param {object} evt Объект события (Элемент, на котором сработал обработчик)
 */

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditPointView.parseStateToTripPoint(this._state));
  };

  #closeEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditClick();
  };

  #typeClickHandler = (evt) => {
    evt.preventDefault();

    this._state.type = evt.target.value;

    this._state.offers = [];
    this.updateElement(this._state);
  };

  #destinationChangeHandler = (evt) => {
    const newDEstinationId = this.#destinationsModel.getByName(evt.target.value).id;
    this._state.destination = newDEstinationId;
    this.updateElement(this._state);
  };

  #priceChangeHandler = (evt) => {
    this._state.basePrice = +evt.target.value;
    this.updateElement(this._state);
  };

  #offersClickHandler = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      if (this._state.offers.find((offerId) => offerId === evt.target.dataset.offerId)) {
        this._state.offers = this._state.offers.filter((offerId) =>
          offerId !== evt.target.dataset.offerId);
      } else {
        this._state.offers.push(evt.target.dataset.offerId);
      }
      this.updateElement(this._state);
    }
  };

  #startDateChangeHandler = ([dateFrom]) => {
    this.updateElement({
      dateFrom: dateFrom
    });
  };

  #endDateChangeHandler = ([dateTo]) => {
    this.updateElement({
      dateTo: dateTo
    });
  };

  #setDatePickers() {

    this.#datepickerStart = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'd/m/y H:i',
        defaultDate: commonUtil.humanizeDateEditPoint(this._state.dateFrom),
        onChange: this.#startDateChangeHandler,
        enableTime: true,
        maxDate: commonUtil.humanizeDateEditPoint(this._state.dateTo),
        locale:{
          firstDayOfWeek: 1,
        },
        'time_24r':true,
      }
    );

    this.#datePickerEnd = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'd/m/y H:i',
        defaultDate: commonUtil.humanizeDateEditPoint(this._state.dateTo),
        onChange: this.#endDateChangeHandler,
        enableTime: true,
        minDate: commonUtil.humanizeDateEditPoint(this._state.dateFrom),
        locale:{
          firstDayOfWeek: 1,
        },
        'time_24r':true,
      }
    );
  }

  static parseTripPointToState(tripPoint) {
    return {
      ...tripPoint,
    };
  }

  static parseStateToTripPoint(state) {
    return {
      ...state
    };
  }
}

