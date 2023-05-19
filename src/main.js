import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import MockDataService from './service/mock-data-service.js';

const mockDataService = new MockDataService;
const tripPointsModel = new TripPointsModel(mockDataService);
const destinationsModel = new DestinationsModel(mockDataService);
const offersModel = new OffersModel(mockDataService);
const mainPresenter = new MainPresenter({
  tripPointsModel,
  destinationsModel,
  offersModel
});
mainPresenter.init();
