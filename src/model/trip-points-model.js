
/**
 * Класс для управления сущностями точек путешествия
 */

export default class TripPointsModel {

  /**
   * Инициализация данных которые приходят из точки входа
   * @param {object} service сервис с данными управления сущностью
   */

  constructor(service) {
    this.service = service;
    this.tripPoints = this.service.getTripPoints();
  }

  /**
   * Метод для получения точек путешествия
   * @returns Массив точек путешествия
   */

  get() {
    return this.tripPoints;
  }
}
