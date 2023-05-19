/*
*Класс для управления сущностью пунктов назначения
*/
export default class DestinationsModel {
  #destinations = null;
  #service = null;

  /**
   * @param {object} Сервис с данными для управления сущностью
   * @param {Array} Получение копии массива сущности пунктов назначения с помощью сервиса
   **/
  constructor(service) {
    this.#service = service;
    this.#destinations = [...this.#service.getDestinations()];
  }

  /**
   * Метод для копии сущностей о пунктах назначения
   * @returns {Array} Массив пунктов назначения
   */

  get destinations () {
    return this.#destinations;
  }

  /**
   * Метод поиска места назначения по его идентификатору
   * @param {string} id Идентификатор пункта назначения
   * @returns {object} Объект с пунктом назначения
   */

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
