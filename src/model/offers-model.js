/**
 * Класс для управления сущностями дополнительных предложений
 */

export default class OffersModel {
  #service = null;
  #offers = null;

  /**
   * Инициализация данных которые приходят из точки входа
   * @param {object} service сервис с данными для управления сущностью
   * @param {Array} Получение массива копии сущности дополнительных предложений с помощью сервиса
   */

  constructor(service) {
    this.#service = service;
    this.#offers = [...this.#service.getOffers()];
  }
  /**
   * Метод для получения дополнительных предложений
   * @returns Массив копии сущностей дополнительных предложений
   */

  get() {
    return this.#offers;
  }

  /**
   * Метод для поиска дополнительного предложения по типу
   * @param {string} type тип по которому нужно найти дополнительное предложение
   * @returns объект с дополнительным предложением
   */

  getByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }

}
