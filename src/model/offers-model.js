/**
 * Класс для управления сущностями дополнительных предложений
 */

export default class OffersModel {

  /**
   * Инициализация данных которые приходят из точки входа
   * @param {object} service сервис с данными для управления сущностью
   */

  constructor(service) {
    this.service = service;
    this.offers = this.service.getOffers();
  }
  /**
   * Метод для получения дополнительных предложений
   * @returns Массив дополнительных предложений
   */

  get() {
    return this.offers;
  }


  // offersList = getOffersList();


  // getOffersList() {
  //   return this.offersList;
  // }
}
