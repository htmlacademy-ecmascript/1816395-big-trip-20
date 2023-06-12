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

  get offers() {
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

  /**
   * Метод для поиска дополнительных предложений по идентификаторам  дополнительных предложений  точки путешествия
   * @param {object} offersTripPoint Объект с точкой путешествия
   * @returns объект с дополнительным предложением
   */

  getById(offersTripPoint) {
    if (offersTripPoint) {


      const
        typeOffer = offersTripPoint.type,
        offersTripPointIds = offersTripPoint.offers,
        offersOfType = this.getByType(typeOffer);

      return offersTripPointIds
        .map((id) => offersOfType.offers
          .find((offer) => offer.id === id)
        );
    }
    return [];
  }

  getOffersIds(typeOffer) {
    return this.getByType(typeOffer)
      .map((offer)=>offer.id);
  }

}

function generateTripPointOffers(AllOffers, typeOffer) {

  function getOffersByType(type) {
    return AllOffers.find((offer) => offer.type === type);
  }

  function shuffleArray(offersAvailable) {
    return offersAvailable.sort(() => Math.random() - 0.5);
  }

  const tripPointAvailableOffer = [...getOffersByType(typeOffer).offers];
  const tripPointOffersIds = shuffleArray(tripPointAvailableOffer)
    .map((offer) => offer.id)
    .splice(0, Math.floor(Math.random() * tripPointAvailableOffer.length));
  return tripPointOffersIds;
}
