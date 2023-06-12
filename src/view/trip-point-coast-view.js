import AbstractView from '../framework/view/abstract-view.js';
import { commonUtil } from '../utils/common-util.js';

/**
 * Метод считает базовою стоимость точек путешествия
 * @param {Array} tripPoints Массив с точек путешествия
 * @returns Число с базовой стоимостью точек путешествия
 */

function getBasePrice(tripPoints) {
  const basePrices = tripPoints.map((tripPoint) => tripPoint.basePrice);
  console.log(basePrices)
  return commonUtil.getSumOfValues(basePrices);
}

/**
 * Метод возвращает стоимость всех дополнительных предложений которые выбраны в точках путешествий
 * @param {Array} allOffersOfTripPoints Массив всех дополнительных предложений которые выбраны в точках путешествия
 * @returns Возвращает число со стоимостью всех дополнительных предложений которые выбраны в точках путешествий
 */

function getOffersPrice(allOffersOfTripPoints) {

  const offersPrice = allOffersOfTripPoints.map((offers) => {
    const offersPriceValues = offers.map((offer) => offer.price);
    return commonUtil.getSumOfValues(offersPriceValues);
  });

  return commonUtil.getSumOfValues(offersPrice);
}

/**
 * Создает разметку для общей стоимости точек путешествия
 * @param {object} tripPoints Объект с точкой путешествия
 * @param {object} offersModel Объект с моделью дополнительных предложений
 * @returns Возвращает разметку для общей стоимости точек путешествия
 */

function createTripCoastHTML(tripPoints, offersModel) {


  const basePrice = getBasePrice(tripPoints);

  const allOffersOfTripPoints = tripPoints
    .map((tripPoint) => offersModel.getById(tripPoint)
    );

  const offersPrice = getOffersPrice(allOffersOfTripPoints);
  console.log(offersPrice, basePrice)
  return basePrice + offersPrice;
}

/**
 * Создает шаблон разметки стоимости точек путешествия
 * @param {object} tripPoints Объект с точкой путешествия
 * @param {object} offersModel Объект с моделью дополнительных предложений
 * @returns Строку с шаблоном разметки стоимости точек путешествия
 */

function createTripPointCoastViewTemplate(tripPoints, offersModel) {

  const tripCoastHTML = createTripCoastHTML(tripPoints, offersModel);

  return (/*html*/ `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${tripCoastHTML}</span>
    </p>
  `);
}

/**
 * Класс для управления компонентом для отрисовки TripPointCoastView
 */

export class TripPointCoastView extends AbstractView {
  #tripPoints = null;
  #offersModel = null;

  constructor({ tripPoints, offersModel }) {
    super();
    this.#tripPoints = tripPoints;
    this.#offersModel = offersModel;
  }

  /**
 * Метод возвращает шаблон разметки стоимости точек путешествия
 */

  get template() {
    return createTripPointCoastViewTemplate(this.#tripPoints, this.#offersModel);
  }
}
