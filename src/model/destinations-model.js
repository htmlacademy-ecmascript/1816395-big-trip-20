/*
*Класс для управления сущностью пунктов назначения
*/
export default class DestinationsModel {
  /**
   * @param {object} сервис с данными для управления сущностью
   **/
  constructor(service) {
    this._service = service;
    this._destinations = this._service.getDestinations();
  }

  /**
   * Метод для получения пунктов назначения
   * @returns {Array} Массив пунктов назначения
   */

  get() {
    return this._destinations;
  }

  /**
   * Метод поиска места назначения по его идентификатору
   * @param {string} id Идентификатор пункта назначения
   * @returns {object}
   */

  getDestinationById(id) {
    return this._destinations.find((destination) => destination.id === id);
  }
}
