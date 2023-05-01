import MainPresenter from './presenter/main-presenter.js';
import TripPointsModel from './model/tasks-model.js';

const tripPointsModel = new TripPointsModel;
const mainPresenter = new MainPresenter({tripPointsModel});
mainPresenter.init();
