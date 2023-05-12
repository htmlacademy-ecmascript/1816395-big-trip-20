import TripEventsItemView from '../view/trip-events-item-view.js';

import { render } from '../render.js';

export default class PointPresenter {

  constructor({ pointContainer, tripPoints, destinationsList, offersList }) {
    this.pointContainer = pointContainer;
    this.tripPoints = tripPoints;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  init() {
    for (let i = 1; i < this.tripPoints.length; i++) {
      render(
        new TripEventsItemView({
          tripPoint: this.tripPoints[i],
          destinationsList: this.destinationsList,
          offersList: this.offersList
        }),
        this.pointContainer);
    }
  }

}




// import TripEventsItemView from '../view/trip-events-item-view.js';
// import { render } from '../framework/render.js';

// /**
//  * Класс который отвечает за управление отрисовки точек путешествия
//  */

// export default class PointPresenter {
//   #pointContainer = null;
//   #tripPoints = null;
//   #destinationsList = null;
//   #offersList = null;

//   #tripEventsItemComponent = new TripEventsItemView(
//     {
//       tripPoint: this.#tripPoints,
//       destinationsList: this.#destinationsList,
//       offersList: this.#offersList
//     }
//   );

//   constructor({ pointContainer, tripPoints, destinationsList, offersList }) {
//     this.#pointContainer = pointContainer;
//     this.#tripPoints = tripPoints;
//     this.#destinationsList = destinationsList;
//     this.#offersList = offersList;
//   }

//   init() {
//     this.#renderTripPoints();
//   }

//   #renderTripPoints() {
//     for (let i = 1; i < this.#tripPoints.length; i++) {
//       render(
//         this.#tripEventsItemComponent,
//         this.#pointContainer);
//     }
//   }

// }
