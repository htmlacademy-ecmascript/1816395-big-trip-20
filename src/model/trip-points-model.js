
/**
 * Класс для управления сущностями точек путешествия
 */

export default class TripPointsModel {
  #service = null;
  #tripPoints = null;

  /**
   * Инициализация данных которые приходят из точки входа
   * @param {object} service сервис с данными управления сущностью
   * @param {Array} Получение копии  массива сущности точек путешествия с помощью сервиса
   */

  constructor(service) {
    this.#service = service;
    this.#tripPoints = [...this.#service.getTripPoints()];
  }

  /**
   * Метод для получения точек путешествия
   * @returns Массив точек путешествия
   */

  get tripPoints() {
    return this.#tripPoints;
  }
}
