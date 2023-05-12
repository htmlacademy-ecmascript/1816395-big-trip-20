/*
*Класс для управления сущностью пунктов назначения
*/
export default class DestinationsModel {
  #destinations = null;
  #service = null;

  /**
   * @param {object} сервис с данными для управления сущностью
   **/
  constructor(service) {
    this.#service = service;
    this.#destinations = this.#service.getDestinations();
  }

  /**
   * Метод для получения пунктов назначения
   * @returns {Array} Массив пунктов назначения
   */

  get() {
    return this.#destinations;
  }

  /**
   * Метод поиска места назначения по его идентификатору
   * @param {string} id Идентификатор пункта назначения
   * @returns {object}
   */

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
