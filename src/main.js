import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/trip-points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const tripPointsModel = new TripPointsModel;
const destinationsModel = new DestinationsModel;
const offersModel = new OffersModel;
const mainPresenter = new MainPresenter({
  tripPointsModel,
  destinationsModel,
  offersModel
});
mainPresenter.init();
