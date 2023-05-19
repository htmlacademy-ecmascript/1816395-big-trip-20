import AbstractView from '../framework/view/abstract-view.js';
import { util } from '../util.js';

/**
 * Создает разметку перечня пунктов назначения
 * @param {Array} destinations Массив пунктов назначения
 * @returns Строку с разметкой перечня пунктов назначения
 */

const createInfoDestinationsHTML = (destinations) => {
  const destinationsNames = util.getDestinationNames(destinations);

  return destinationsNames
    .map((destinationName, index) => {
      const isDestinationLast = index === destinationsNames.length - 1
        ? `${destinationName}`
        : `${destinationName} &mdash;`;
      return isDestinationLast;
    })
    .join('');
};

/**
 * Создает разметку даты путешествия по всем точкам путешествия
 * @param {Array} tripPoints Массив всех точек путешествия
 * @returns Строку с разметкой даты путешествия по всем точкам путешествия
 */

function createInfoDateHTML(tripPoints) {
  const
    firstTripPointStartDate = tripPoints[0].dateFrom,
    lastTripPointEndDate = tripPoints[tripPoints.length - 1].dateTo;

  const
    dateFrom = util.humanizeDateInfo(firstTripPointStartDate),
    dateTo = util.humanizeDateInfo(lastTripPointEndDate);

  return (/*html*/
    `${dateFrom}&nbsp;&mdash;&nbsp;${dateTo}`
  );
}

/**
 * Создает шаблон разметки информации о путешествии
 * @param {Array} destinationsList Массив пунктов назначения
 * @param {Array} tripPoints Массив всех точек путешествия
 * @returns Строку шаблона разметки информации о путешествии
 */

function createTripEventInfoTemplate(destinationsList, tripPoints) {
  const
    infoDestinationsHTML = createInfoDestinationsHTML(destinationsList),
    infoDateHTML = createInfoDateHTML(tripPoints);

  return (/*html*/
    `
    <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${infoDestinationsHTML}</h1>

      <p class="trip-info__dates">${infoDateHTML}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>
  `
  );
}

/**
 * Класс для управления компонентом для отрисовки TripEventsInfoView
 */

export default class TripEventsInfoView extends AbstractView {
  #destinationsList = null;
  #tripPoints = null;

  constructor({ destinationsList, tripPoints }) {
    super();
    this.#destinationsList = destinationsList;
    this.#tripPoints = tripPoints;
  }

  /**
   * Метод возвращает шаблон разметки информации о путешествии
   */

  get template() {
    return createTripEventInfoTemplate(this.#destinationsList, this.#tripPoints);
  }
}
