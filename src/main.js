import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import MockDataService from './service/mock-data-service.js';
import { generateFilters } from './mock/filter-data.js';

/**
 * Подключение сервиса управляющего получением данных
 */

const mockDataService = new MockDataService;

/**
 * Подключение моделей
 */

const tripPointsModel = new TripPointsModel(mockDataService);
const destinationsModel = new DestinationsModel(mockDataService);
const offersModel = new OffersModel(mockDataService);

const filters = generateFilters(tripPointsModel.tripPoints);

/**
 * Инициализация mainPresenter и передача моделей
 */

const mainPresenter = new MainPresenter({
  tripPointsModel,
  destinationsModel,
  offersModel,
  filters
});
mainPresenter.init();
