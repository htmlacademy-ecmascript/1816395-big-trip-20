import { CONST_COMMON_DATA } from '../const/common-const.js';
import { commonUtil } from '../utils/common-util.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

/**
 * Создание разметки всплывающего меню выбора типа поездки
 * @param {string} tripPointType Строка с типом точки путешествия
 * @returns Строку с разметкой всплывающего меню выбора типа поездки
 */

function createEventTypeWrapperHTML(tripPointType) {

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
      <div class="event__type-item">
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeType}</label>
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

/**
 * Создает разметку с названием пункта назначения
 * @param {string} tripPointType Строка с типом точки путешествия
 * @param {string} destinationName Строка с названием пункта назначения
 * @returns Строку с разметкой названия пункта назначения
 */

function createTripEventDestinationHTML(tripPointType, destinationName) {
  return (/*html*/ `
  <div class="event__field-group  event__field-group--destination">
  <label class="event__label  event__type-output" for="event-destination-1">
    ${tripPointType}
  </label>
  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
    value=${destinationName} list="destination-list-1">
  <datalist id="destination-list-1">
    <option value="Amsterdam"></option>
    <option value="Geneva"></option>
    <option value="Chamonix"></option>
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

function createTripEventAvailableOffersHtml(tripPoint, availableOffersTripPoint) {

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
    const offerClass = createOfferClass(offerTitle);

    return (/*html*/`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden"
        id="event-offer-${offerClass}-1"
        type="checkbox"
        name="event-offer-luggage"
        ${checked}>
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

function createEditTripPointTemplate(tripPoint, destination, availableOffersTripPoint) {
  const destinationName = destination.name;
  const destinationDescription = destination.description;
  const destinationPictures = destination.pictures;
  const tripPointType = tripPoint.type;
  const tripPointDateStart = tripPoint.dateFrom;
  const tripPointDateEnd = tripPoint.dateTo;
  const tripPointPrice = tripPoint.basePrice;

  const tripEventTypeWrapperHTML = createEventTypeWrapperHTML(tripPointType);
  const tripEventDestinationHTML = createTripEventDestinationHTML(tripPointType, destinationName);
  const tripEventTimeHTML = createTripEventTimeHTML(tripPointDateStart, tripPointDateEnd);
  const tripEventPriceHTML = createTripEventPriceHTML(tripPointPrice);
  const tripEventAvailableOffersHTML = createTripEventAvailableOffersHtml(tripPoint, availableOffersTripPoint);
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
  #destination = null;
  #availableOffersTripPoint = null;

  #destinationsModel = null;
  #offersModel = null;

  #handleFormSubmit = null;
  #handleCloseEditClick = null;

  /**
 * Инициализация данных из Points-presenter
 * @param {object} tripPoint Точка путешествия
 * @param {Array} destination Пункт назначения
 * @param {object} offer Объект дополнительных предложений одного типа
 * @param {object} handleFormSubmit Объект с функцией которая будет срабатывать при подтверждении формы
 */

  constructor({
    tripPoint,
    destination,
    availableOffersTripPoint,
    destinationsModel,
    offersModel,

    onFormSubmit,
    onCloseEditClick
  }) {
    super();
    this._setState(EditPointView.parseTripPointToState(tripPoint));
    this.#destination = destination;
    this.#availableOffersTripPoint = availableOffersTripPoint;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;

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
      this.#destination,
      this.#availableOffersTripPoint,
      this.#destinationsModel,
      this.#offersModel,
    );
  }

  /**
   * Метод подключает слушатели событий
   */

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditClickHandler);

    this.element.querySelectorAll('.event__type-label')
      .forEach((element) => element.addEventListener('click', this.#typeClickHandler));
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
    this._state.type = evt.target.textContent;
    this.updateElement(this._state);
  };

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

